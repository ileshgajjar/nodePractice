var express = require("express");
var fs = require("fs");
var bodyparser = require("body-parser");

/*
  (1) Multer is a node.js middleware for handling multipart/form-data,
      which is primarily used for uploading files.
  (2) Multer adds a body object and a file or files object to the request object.
      The body object contains the values of the text fields of the form,
      the file or files object contains the files uploaded via the form.
*/

var multer = require("multer");

var app = express();

app.use(express.static('../public'));
app.use(bodyparser.urlencoded({extended : false}));
//app.use(multer({ dest : '../public/tmp/'}));
var upload = multer({ dest : '../public/tmp/'});

app.get('/',function(request,response){
    response.sendFile('../'+__dirname+'/public/index.html');
});

app.post('/file_upload', function (req, res) {
   console.log(req.files.file.name);
   console.log(req.files.file.path);
   console.log(req.files.file.type);
   var file = __dirname + "/" + req.files.file.name;

   fs.readFile( req.files.file.path, function (err, data) {
      fs.writeFile(file, data, function (err) {
         if( err ){
            console.log( err );
            }else{
               response = {
                  message:'File uploaded successfully',
                  filename:req.files.file.name
               };
            }
         console.log( response );
         res.end( JSON.stringify( response ) );
      });
   });
})

app.listen(8885);
console.log("server is running !");
