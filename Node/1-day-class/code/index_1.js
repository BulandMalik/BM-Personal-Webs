"use strict"; /// ECMAScript
const
  defaultPort = 8080,
  program = require("commander-plus"),
  fs = require ("fs"),
  path = require("path");

//console.log("Hello World!")
var webserverPort;

program
  .version("0.0.1")
  .option("-p, --port [port]","Run Webserver on a specific port.", 8080) //run now --help and it shows what parameters to pass
  .option("-F, --folder [folderPath]","Specify the root folder.") //run now --help and it shows what parameters to pass
  .option("-C, --config [pathToCOnfigFile]", "config file of web server")
  .parse(process.argv);

//if (program.port) console.log("port: " + program.port);
if (program.folder) console.log("folder: " + program.folder);

if ( program.port)
{
  webserverPort = program.port;
}

if ( !webserverPort)
{
  webserverPort = process.env.PORT || defaultPort;
}
/*if ( !program.port && process.env.PORT)
{
  program.port = process.env.PORT; //reading system level properties
}
*/

console.log("webserver Port: " + webserverPort);

//------------------------------------------------------


fs.readFile(program.config, "utf-8", function(err,data){
    console.log("file data: "+data);
}); //asynch programming

console.log (path.sep); // checking the path seperator
console.log(program.config);
