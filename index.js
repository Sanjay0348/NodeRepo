const http=require("http");

const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.write("hpme Page");
    }
    else if(req.url==='/about'){
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.write("About Page");
    }
    else if(req.url==='/details')
    {
        res.writeHead(200,{'Content-Type':'application/json'});
        res.write(JSON.stringify({
            firstname:"sanjay",
            lastname:"V"
        }));
    }
    else{
        res.writeHead(404);
        res.end('Page not found');
    }
    res.end();
})
const PORT=proces.env.PORT || 3500;
server.listen(PORT,()=>{
    console.log(`listening on port 3500`);
})
