import test from 'node:test';
import assert from 'node:assert/strict';
import {spawn} from 'node:child_process';
import {once} from 'node:events';
import {readFile} from 'node:fs/promises';

// Executes the entry point declared by npm start on a real ephemeral port.
test('production start serves root-mounted pages and downloads on an externally bound PORT',async()=>{
  const pkg=JSON.parse(await readFile(new URL('../package.json',import.meta.url),'utf8'));
  assert.ok(pkg.scripts.start,'Railpack requires a production start script');
  assert.match(pkg.scripts.start,/^node /);
  const child=spawn(process.execPath,pkg.scripts.start.split(' ').slice(1),{cwd:new URL('..',import.meta.url),env:{...process.env,PORT:'0',HOST:''},stdio:['ignore','pipe','pipe']});
  let output='';
  const ready=new Promise((resolve,reject)=>{
    child.stdout.on('data',chunk=>{output+=chunk;const found=output.match(/http:\/\/0\.0\.0\.0:(\d+)\//);if(found)resolve(Number(found[1]));});
    child.on('exit',code=>reject(new Error(`Start exited ${code}: ${output}`)));
    child.on('error',reject);
  });
  const timeout=setTimeout(()=>child.kill(),10000);
  try{
    const port=await ready;
    for(const path of ['/','/avelin/GRAMMAR.html','/process/JOURNEY.html','/raw/avelin/GRAMMAR.md','/assets/style.css']){
      const response=await fetch(`http://127.0.0.1:${port}${path}`);
      assert.equal(response.status,200,path);
      assert.ok((await response.text()).length>0);
    }
    assert.equal((await fetch(`http://127.0.0.1:${port}/missing-page`)).status,404);
  }finally{
    clearTimeout(timeout);
    child.kill();
    await once(child,'close');
  }
});
