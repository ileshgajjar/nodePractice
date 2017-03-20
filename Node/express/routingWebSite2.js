//using simple nodeJS (without express)

var http = require("http");
var fs = require("fs");

function display(request,response)
{
   console.log("request was made for : "+request.url);

   if(request.url ==='/' || request.url==='/home')
   {
     response.writeHead(200,{'content-type':'text/html'});
     fs.createReadStream(__dirname+'/index.html').pipe(response);
   }

   else if(request.url ==='/contact')
   {
     response.writeHead(200,{'content-type':'text/html'});
     fs.createReadStream(__dirname+'/contact.html').pipe(response);
   }
    else
    {
       response.writeHead(200,{'content-type':'text/plain'});
        response.write(" sorry  requested page "+request.url+" not exist");
        response.end();
    }
}

http.createServer(display).listen(8081);
console.log("Server is running !!");
