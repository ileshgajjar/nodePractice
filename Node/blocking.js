var http = require("http");
var url = require("url");

function display(request,response)
{
   response.writeHead(200,{'Content-type' : 'text/plain'})

   if(url.parse(request.url).pathname == '/wait')
   {
     var start = new Date().getTime();
     while(new Date().getTime() < start + 10000)
         response.write('thanks for waiting !!!');

   }
   else
   {
     response.write("hello");
   }
    response.end();
}

http.createServer(display).listen(8888);
console.log("server is running !");
