var fs = require("fs");
var express = require("express");
var app = express();

app.get('/',function(req,res){
   res.send("hello GET");
});

app.post('/',function(req,res){
   res.send("hello POST");
});

app.get('/ilesh',function(req,res){
   res.send("inside ilesh");
});

var server = app.listen(8001);
console.log("server is running");
