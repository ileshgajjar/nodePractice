var http = require("http");
var connect = require("connect");

var app = connect();

function profile(request,response)
{
  console.log("inside profile");
}

app.use('/',function(request,response){
  console.log("homepage");
})

app.use('/profile',profile);

http.createServer(app).listen(8001);
console.log("server is running");
