/* This program prints the sum of the
   numerical values of the "COMMAND LINE ARGUMENTS"
   provided to the Node script.
   e.g. node useOfProcessArg.js 1 2 3
   o/p :-  6
*/
var result = 0;

/*
 i starts with 2 because process.argv[0] = "node"
                         process.argv[1] = "programm_name.js"
                         process.argv[2] = "first_argument".. so on..

*/

for(var i=2; i<process.argv.length ; i++)
{
  result += Number(process.argv[i]);
}
console.log(result);
