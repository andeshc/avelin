import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile, readdir} from 'node:fs/promises';
import path from 'node:path';
import {spawnSync, spawn} from 'node:child_process';

const build = spawnSync(process.execPath,['scripts/build.mjs'],{encoding:'utf8'});
assert.equal(build.status,0,build.stderr);
async function files(dir) {
  return (await Promise.all((await readdir(dir,{withFileTypes:true})).map(e=>e.isDirectory()?files(path.join(dir,e.name)):path.join(dir,e.name)))).flat();
}
test('every local link, heading anchor, stylesheet and download resolves under a Pages subpath',async()=>{
  const paths=await files('dist');
  for (const file of paths.filter(p=>p.endsWith('.html'))) {
    const html=await readFile(file,'utf8');
    const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
    assert.equal(new Set(ids).size,ids.length,`${file}: unique anchors`);
    for (const [,href] of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
      if (/^(https?:|mailto:)/.test(href)) continue;
      assert.ok(!href.startsWith('/'),`${file}: relative URL ${href}`);
      const url=new URL(href,`https://example.test/avelin/${path.relative('dist',file)}`);
      assert.ok(url.pathname.startsWith('/avelin/'));
      const target=path.join('dist',decodeURIComponent(url.pathname.slice('/avelin/'.length)));
      const content=await readFile(target,'utf8');
      if(url.hash) assert.ok(content.includes(`id="${decodeURIComponent(url.hash.slice(1))}"`),`${file}: ${href} anchor exists`);
    }
  }
});
test('preview serves real documents under /avelin/ with 404s instead of SPA fallbacks',async(t)=>{
  const child=spawn(process.execPath,['scripts/serve.mjs'],{env:{...process.env,PORT:'4389'},stdio:['ignore','pipe','pipe']});
  t.after(()=>child.kill());
  await new Promise((resolve,reject)=>{
    const timeout=setTimeout(()=>reject(new Error('Preview server did not start')),4000);
    child.once('exit',code=>{clearTimeout(timeout);reject(new Error(`Preview server exited ${code}`));});
    child.stdout.on('data',()=>{clearTimeout(timeout);resolve();});
  });
  const response=await fetch('http://127.0.0.1:4389/avelin/avelin/GRAMMAR.html');
  assert.equal(response.status,200);
  assert.match(response.headers.get('content-type'),/text\/html/);
  assert.match(await response.text(),/Reference Grammar/);
  assert.equal((await fetch('http://127.0.0.1:4389/avelin/missing.html')).status,404);
  assert.equal((await fetch('http://127.0.0.1:4389/avelin/raw/avelin/READER.md')).status,200);
});
