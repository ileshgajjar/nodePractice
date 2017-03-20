var express = require("express");
var app = express();

app.set('view engine','ejs');

app.get('/',function(req,res){
   res.render('index');
   console.log("homepage");
})

app.get('/contacts',function(req,res){

   res.render('contact',{qs : req.query});
   console.log("contacts");
})

app.get('/profile/:name',function(req,res){
    var personalData = {age : 22 , address:'Ahmedabad', hobbies : ['reading' , 'travelling'] };
   res.render('profile', {person : req.params.name , data : personalData});
   console.log("profile with name : " +req.params.name);
})

app.listen(8081);
