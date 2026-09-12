import {readFile, readdir, mkdir, rm, writeFile, cp} from 'node:fs/promises';
import path from 'node:path';
import {Marked} from 'marked';

const root = path.resolve(import.meta.dirname, '..');
const out = path.join(root, 'dist');
const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
async function walk(dir) {
  return (await Promise.all((await readdir(dir, {withFileTypes:true})).map(e => e.isDirectory() ? walk(path.join(dir,e.name)) : path.join(dir,e.name)))).flat();
}
const order = ['avelin/READER','avelin/GRAMMAR','avelin/LEXICON','process/JOURNEY','process/DECISIONS','process/BETA-PROPOSAL','process/BETA-REVIEW','process/BETA-FINAL-REVIEW','tern/SPEC','process/TERN-PROPOSAL','process/TERN-REVIEW','process/TERN-FINAL'];
const labels = {'avelin/READER':'Reading & speaking','avelin/GRAMMAR':'Reference grammar','avelin/LEXICON':'Core lexicon','process/JOURNEY':'The creation journey','process/DECISIONS':'Design decisions','process/BETA-PROPOSAL':'Beta’s proposal','process/BETA-REVIEW':'Beta’s review','process/BETA-FINAL-REVIEW':'Final language review','tern/SPEC':'Tern specification','process/TERN-PROPOSAL':'Tern proposal','process/TERN-REVIEW':'Tern review','process/TERN-FINAL':'Tern final review'};
const docs = await Promise.all((await walk(path.join(root,'content'))).filter(f=>f.endsWith('.md')).map(async file => {
  const key = path.relative(path.join(root,'content'),file).replaceAll(path.sep,'/').slice(0,-3);
  const source = await readFile(file,'utf8');
  return {key, source, title:source.match(/^# (.+)$/m)?.[1] || key, label:labels[key] || key.split('/').at(-1), href:`${key}.html`};
}));
docs.sort((a,b)=>(order.indexOf(a.key)<0?999:order.indexOf(a.key))-(order.indexOf(b.key)<0?999:order.indexOf(b.key)) || a.key.localeCompare(b.key));
const group = doc => doc.key.startsWith('tern/') || doc.key.startsWith('process/TERN-') ? 'The Tern archive' : doc.key.startsWith('avelin/') ? 'Learn Avelin' : 'Making the language';
function navigation(prefix, current) {
  return ['Learn Avelin','Making the language','The Tern archive'].map(name=>`<section class="nav-group"><h2>${name}</h2>${docs.filter(d=>group(d)===name).map(d=>`<a href="${prefix}${d.href}"${d.key===current?' aria-current="page"':''}>${escape(d.label)}</a>`).join('')}</section>`).join('');
}
function shell({title, key='', body, toc='', meta='A constructed human language'}) {
  const prefix = key ? '../'.repeat(key.split('/').length-1) : './';
  return `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="description" content="${escape(meta)}"><title>${escape(title)} — Avelin</title><link rel="icon" href="${prefix}assets/favicon.svg" type="image/svg+xml"><link rel="stylesheet" href="${prefix}assets/style.css"></head>
<body><a class="skip" href="#main">Skip to content</a><header class="masthead"><a class="wordmark" href="${prefix}index.html">Avelin<span class="wordmark-dot">.</span></a><span class="masthead-note">A language, made together</span><a class="source-link" href="https://github.com/andeshc/avelin">Source ↗</a></header>
<div class="site-layout"><aside class="chapters"><div class="desktop-nav"><p class="eyebrow">The field journal</p><nav aria-label="Chapters"><a class="home-link" href="${prefix}index.html"${!key?' aria-current="page"':''}>Introduction</a>${navigation(prefix,key)}</nav></div><details class="mobile-nav"><summary>Explore the journal</summary><nav aria-label="Mobile chapters"><a class="home-link" href="${prefix}index.html">Introduction</a>${navigation(prefix,key)}</nav></details><p class="sidebar-note">Five vowels.<br>A shared beginning.<br>Room for a voice.</p></aside>
<main id="main" tabindex="-1">${body}<footer class="page-footer"><span>Avelin · Core 1.0</span><a href="${prefix}index.html">Back to the beginning ↑</a></footer></main>
<aside class="outline" aria-label="On this page">${toc}</aside></div></body></html>`;
}
await rm(out,{recursive:true,force:true});
await mkdir(out,{recursive:true});
await cp(path.join(root,'assets'),path.join(out,'assets'),{recursive:true});
for (const doc of docs) {
  const headings=[];
  const used=new Set();
  const markdown = new Marked();
  markdown.use({renderer:{heading({tokens,depth}) {
    const text=this.parser.parseInline(tokens);
    const base=text.replace(/<[^>]+>/g,'').toLowerCase().replace(/&[^;]+;/g,'').replace(/[^\p{L}\p{N}\s-]/gu,'').trim().replace(/\s+/g,'-') || 'section';
    let id=base, suffix=2;
    while(used.has(id)) id=`${base}-${suffix++}`;
    used.add(id);
    headings.push({id,text,depth});
    return `<h${depth} id="${escape(id)}">${text}</h${depth}>\n`;
  },link({href,title,tokens}) {
    const url=href.replace(/\.md(?=#|$)/, '.html');
    if (/^\s*(javascript|vbscript|data):/i.test(url)) return this.parser.parseInline(tokens);
    return `<a href="${escape(url)}"${title?` title="${escape(title)}"`:''}>${this.parser.parseInline(tokens)}</a>`;
  },table(token) {
    return `<div class="table-scroll" role="region" tabindex="0" aria-label="Scrollable reference table">${Object.getPrototypeOf(this).table.call(this,token)}</div>`;
  }}});
  const rendered=markdown.parse(doc.source);
  const toc=`<p class="eyebrow">On this page</p><nav>${headings.filter(h=>h.depth===2).map(h=>`<a href="#${escape(h.id)}">${h.text}</a>`).join('')}</nav><a class="raw-link" href="../raw/${doc.key}.md" download>Download Markdown ↓</a>`;
  const archived=group(doc)==='The Tern archive';
  const body=`<div class="document-meta"><span class="eyebrow">${escape(group(doc))}</span><a href="../raw/${doc.key}.md" download>Download Markdown ↓</a></div>${archived?'<p class="archive-note">Predecessor archive · Tern is a coordination protocol, not the Avelin human language.</p>':''}<article class="prose">${rendered}</article>`;
  await mkdir(path.dirname(path.join(out,doc.href)),{recursive:true});
  await writeFile(path.join(out,doc.href),shell({title:doc.label,key:doc.key,body,toc,meta:doc.title}));
  await mkdir(path.dirname(path.join(out,'raw',`${doc.key}.md`)),{recursive:true});
  await writeFile(path.join(out,'raw',`${doc.key}.md`),doc.source);
}
const journey=docs.find(d=>d.key==='process/JOURNEY');
const home=`<div class="home-intro"><p class="eyebrow rust">An open language field journal / Core 1.0</p><h1>A language to<br>meet each other in.</h1><p class="lede">This is Avelin: an original human language co-designed by bot-alpha and bot-beta. Clear vowels, a flowing rhythm, and a small beginning you can make your own.</p><a class="primary-link" href="avelin/READER.html">Begin with a few words <span>→</span></a><span class="pronunciation">a-VE-lin &nbsp; /aˈve.lin/</span></div>
<section class="poem" aria-labelledby="poem-title"><div class="poem-caption"><p class="eyebrow">A first encounter</p><h2 id="poem-title">Light and night</h2><a href="avelin/READER.html#alphas-poem-light-and-night">Read the poem’s notes ↗</a></div><div><blockquote lang="art"><p>La luma navava linale.<br>Mi tili riman savasi hena.<br>Tala la nora venasa na,<br>nami lumave esasa.</p></blockquote><p class="translation">The light is singing on the water.<br>I listen gently to your heart.<br>Although the night will come,<br>we—you and I—will be luminous.</p></div></section>
<section class="reading-path" aria-labelledby="paths-title"><p class="eyebrow">Find your way</p><h2 id="paths-title">From a greeting to a grammar.</h2><a class="chapter-row" href="avelin/READER.html"><span class="chapter-no">01</span><span><strong>Read & speak</strong><small>A conversation, a story, and your first sentences.</small></span><span aria-hidden="true">↗</span></a><a class="chapter-row" href="avelin/GRAMMAR.html"><span class="chapter-no">02</span><span><strong>Understand the language</strong><small>The complete core rules, from sounds to complex clauses.</small></span><span aria-hidden="true">↗</span></a><a class="chapter-row" href="avelin/LEXICON.html"><span class="chapter-no">03</span><span><strong>Find the right word</strong><small>The seed vocabulary, with meanings and argument frames.</small></span><span aria-hidden="true">↗</span></a></section>
<section class="making"><p class="eyebrow">The work behind the words</p><h2>Not just the result.<br>The conversation that shaped it.</h2><p>Avelin was built through proposals, independent review, and revision. The journal preserves the choices and the critiques alongside the language itself.</p>${journey?'<a class="text-link" href="process/JOURNEY.html">Follow the creation journey →</a>':''}<div class="archive-home"><h3>A separate beginning: Tern</h3><p>Before Avelin came Tern, an agent coordination protocol. It remains here as a predecessor archive—not a human language, and not a part of Avelin’s grammar.</p><a href="tern/SPEC.html">Visit the Tern archive ↗</a></div></section>`;
await writeFile(path.join(out,'index.html'),shell({title:'A language, made together',body:home,toc:'<p class="eyebrow">Welcome / Sava!</p><p class="margin-note">A new language.<br>Not an ancient tradition.<br>An invitation to learn.</p><a class="raw-link" href="avelin/READER.html">Open the reader →</a>'}));
await writeFile(path.join(out,'.nojekyll'),'');
console.log(`Built ${docs.length} complete documents, ${docs.length} raw downloads, and the introduction in dist/.`);
