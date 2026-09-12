import test from 'node:test';
import assert from 'node:assert/strict';
import {spawnSync} from 'node:child_process';
import {readFile, readdir} from 'node:fs/promises';
import path from 'node:path';

async function files(dir) {
  const entries = await readdir(dir, {withFileTypes:true});
  return (await Promise.all(entries.map(e => e.isDirectory() ? files(path.join(dir,e.name)) : path.join(dir,e.name)))).flat();
}

test('build publishes every complete source as a reading page and byte-identical download', async () => {
  const result = spawnSync(process.execPath, ['scripts/build.mjs'], {encoding:'utf8'});
  assert.equal(result.status, 0, `Static build must succeed: ${result.stderr}`);
  const sources = (await files('content')).filter(f => f.endsWith('.md'));
  assert.ok(sources.length >= 4);
  for (const source of sources) {
    const original = await readFile(source,'utf8');
    const slug = source.slice('content/'.length).replace(/\.md$/, '.html');
    const html = await readFile(path.join('dist',slug),'utf8');
    assert.equal(await readFile(path.join('dist/raw',source.slice(8)),'utf8'), original);
    assert.match(html, /<main id="main"/);
    assert.match(html, /On this page/);
    assert.match(html, /Download Markdown/);
    // Each nonempty source line must survive markdown rendering in the article.
    const {marked} = await import('marked');
    const plain = s => s.replace(/<[^>]*>/g,'').replace(/&(?:amp|lt|gt|quot|#39);/g, x => ({'&amp;':'&','&lt;':'<','&gt;':'>','&quot;':'"','&#39;':"'"}[x])).replace(/\s+/g,' ').trim();
    const expected = plain(marked.parse(original));
    const article = html.match(/<article[^>]*>([\s\S]*?)<\/article>/)?.[1];
    assert.ok(article, `${slug}: article exists`);
    assert.equal(plain(article), expected, `${slug}: full rendered content preserved`);
  }
  const home = await readFile('dist/index.html','utf8');
  assert.match(home, /La luma navava linale/);
  assert.match(home, /Tern/);
  assert.match(home, /Skip to content/);
});
