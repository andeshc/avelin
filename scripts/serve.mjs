import http from 'node:http';
import {readFile} from 'node:fs/promises';
import path from 'node:path';
const root = path.resolve(import.meta.dirname,'../dist');
const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.svg':'image/svg+xml','.md':'text/plain; charset=utf-8','.js':'text/javascript; charset=utf-8','.json':'application/json; charset=utf-8'};
const port=Number(process.env.PORT || 4173);
const host=process.env.HOST || '127.0.0.1';
http.createServer(async(req,res)=>{
  try {
    let pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname);
    if(pathname==='/avelin') {res.writeHead(302,{Location:'/avelin/'});res.end();return;}
    if(pathname.startsWith('/avelin/')) pathname=pathname.slice(7);
    if(pathname.endsWith('/')) pathname+='index.html';
    const file=path.resolve(root,`.${pathname}`);
    if(!file.startsWith(`${root}${path.sep}`)) {res.writeHead(403);res.end('Forbidden');return;}
    const content=await readFile(file);
    res.writeHead(200,{'Content-Type':types[path.extname(file)] || 'application/octet-stream','X-Content-Type-Options':'nosniff'});
    res.end(content);
  } catch {
    res.writeHead(404,{'Content-Type':'text/plain; charset=utf-8'});res.end('Not found');
  }
}).listen(port,host,()=>console.log(`Avelin preview: http://${host}:${port}/avelin/`));
