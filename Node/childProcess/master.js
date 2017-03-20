var fs= require("fs");
var child_process = require("child_process");

for(var i=0;i<3;i++)
{
  var workerProcess = child_process.exec('node support '+i,function(error,stdout,stderr){
   if(error)
    {
       console.log(error.stack);
         console.log("error code : " +error.code);
         console.log("Error signal : "+error.signal);
    }
    console.log("stdout : "+stdout);
    console.log("stderror : "+stdout);

  });

  workerProcess.on('exit',function(code){
    console.log("child procss exited with code : " +code );
  })
}
