var express = require("express");
var app = express();

app.set('view engine','ejs')

var index = require("./routes/index");
var users = require("./routes/users");

app.use('/',index);
app.use('/users',users);

app.listen(8081);
console.log("server is running");
