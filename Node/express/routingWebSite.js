//Using express framework
var express = require("express");
var app = express();

app.set('view engine','ejs');

app.get('/',function(request,response){
   response.sendFile(__dirname+'/index.html');
   console.log("homepage");
})

app.get('/contact',function(request,response){
    response.sendFile(__dirname+'/contact.html');
    console.log("contact");
})

app.get('/profile/:name',function(req,res){
  //res.send("you request profile with name : "+req.params.name);
  var personalData = {age : 22 , address:'Ahmedabad', hobbies : ['reading' , 'travelling'] };
  res.render('profile',{person : req.params.name , data : personalData});
  console.log("requested profile with name : " +req.params.name);
})

app.listen(8081);
console.log("server is running");
