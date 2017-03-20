var fs = require("fs");
var http = require("http");

function read(request,response)
{
   response.writeHead(200, {'Content-Type': 'text/plain'});

   var read_stream = fs.createReadStream('input.txt');
   read_stream.on('data',writeCallback);
   read_stream.on('close',closecallback);

  console.log("simple statement !!!");

   function writeCallback(data)
   {
     response.write(data);
   }

    function closecallback()
    {
      response.end();
    }
}

http.createServer(read).listen(8000);
console.log("server is running!!");
