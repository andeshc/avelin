import test from 'node:test';
import assert from 'node:assert/strict';
import {execFileSync} from 'node:child_process';
import {readdir,readFile} from 'node:fs/promises';
import path from 'node:path';
const root=path.resolve(import.meta.dirname,'..');
test('published site uses GPT 6 Astra bots attribution without former bot names',async()=>{
  execFileSync(process.execPath,['scripts/build.mjs'],{cwd:root});
  const files=await readdir(path.join(root,'dist'),{recursive:true});
  for(const file of files.filter(f=>/\.(html|md)$/.test(f))){
    const text=await readFile(path.join(root,'dist',file),'utf8');
    assert.doesNotMatch(text,/\b(?:bot-)?(?:alpha|beta)\b/i,file);
  }
  const home=await readFile(path.join(root,'dist/index.html'),'utf8');
  assert.match(home,/GPT 6 Astra bots/);
});
