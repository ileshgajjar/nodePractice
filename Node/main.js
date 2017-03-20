var fs = require('fs');

//Non blocking code example
//readfile uses callback function while readfilesync doesn't so it is blocking function
fs.readFile('input.txt',function(err,data){
  if(err)
  {
    return console.log(err);
  }
  console.log(data.toString());

});

console.log('end!!');
