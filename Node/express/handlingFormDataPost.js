var express = require("express");
var app = express();

// 1) body-parser extracts the entire body portion of an incoming request stream
//    and exposes it on req.body as something easier to interface with
// 2) body-parser gives you a middleware which uses nodejs/zlib to unzip the incoming request data
//    if it's zipped and stream-utils/raw-body to await the full,
//    raw contents of the request body before "parsing it".

var bodyparser = require("body-parser");

// extended: true --> then you can parse nested objects, or generally any type
// extended: false --> you can only parse strings or arrays
var urlencoderParser = bodyparser.urlencoded({extended : false});

app.use(express.static('../public'));

app.get('/',function(request,response){
    response.sendFile('../'+__dirname+'/public/index.html');
});

app.post('/process_post',urlencoderParser,function(request,response){
   output = { fn : request.body.fn,
              ln : request.body.ln
           };
    console.log(output);

    response.end(JSON.stringify(output));

})

app.listen(8081);
