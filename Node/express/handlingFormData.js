var express = require("express");
var app = express();

app.use(express.static('../public'));

console.log(__dirname);

app.get('/',function(request,response){
   response.sendFile('../' +__dirname+ '/public/index.html' )
})

app.get('/process_get',function(request,response){

  abc = {
             fn : request.query.fn,
             ln : request.query.ln
           };
    console.log(abc);
    response.end(JSON.stringify(abc));

})

app.listen(8081);
