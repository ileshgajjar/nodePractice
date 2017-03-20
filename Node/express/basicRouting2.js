var express = require("express");

var app = express();

app.use(express.static('../public')); //Express provides a built-in middleware express.static to serve static files,
                                  // such as images, CSS, JavaScript, etc.

function homeReq(request,response)
{
  response.send("Homepage");
  console.log("Homepage requested !!");
}

function patternReq(request,response)
{
  response.send("pattern page");
  console.log("pattern page requested !!");
}

app.get('/',homeReq);
app.get('/a*v',patternReq);

app.listen(8002);

console.log("server is running !!");
