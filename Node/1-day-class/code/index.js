"use strict"; /// ECMAScript
const
  defaultPort = 8080,
  program = require("commander-plus"),
  fs = require ("fs"),
  http = require("http"), //very flexible, typically use with express as it provides lot of boiler plate code
  express = require("express"),
  path = require("path");

//console.log("Hello World!")
var
  webserverPort,
  webserverRootFolder;

program
  .version("0.0.1")
//.option("-p, --port [port]","Run Webserver on a specific port.", 8080) //run now --help and it shows what parameters to pass
  .option("-p, --port [port]","Run Webserver on a specific port.") //run now --help and it shows what parameters to pass
  .option("-F, --folder [folderPath]","Specify the root folder.") //run now --help and it shows what parameters to pass
  .option("-C, --config [pathToCOnfigFile]", "config file of web server")
  .parse(process.argv);

//Creating Promise ::: ECMAScript
//only call promise if there is a config needs to be parsed
var p = program.config ? new Promise(function(resolve, reject){
  //resolve is a function once our asynch operation complete successfully
  //reject is a function once our asynch operation fails

  fs.readFile(program.config, "utf-8", function processConfig(err,data){
      if ( err ){
        reject(err);
        return;
      }
      console.log("file data: "+data);
      resolve(JSON.parse(data));
  }); //asynch programming

}) : Promise.resolve({});//END Promise

// function then(resolveFn){
//   retunr new Promise(resolve,reject){
//       var result = resolveFn();
//       if (result is a promise ){
//         resolve(result);
//       }
//       else {
//         reject(result)
//       }
//   })
// });
//
// p.then = then();

//p.then calls when resolve gets called
p.then(function(config){
  if (program.folder) console.log("folder: " + program.folder);
  if ( program.port){
    webserverPort = program.port;
  }
  if (!webserverPort){
    if (config.port){
        webserverPort = config.port;
    }
    else{
      webserverPort = process.env.PORT || defaultPort;
    }
  }

  if ( program.folder){
    webserverRootFolder = program.folder;
  }
  if ( !webserverRootFolder ){
    if ( config.rootFolder ){
      webserverRootFolder = config.rootFolder;
    }
    else {
        webserverRootFolder = ".";
    }
  }

  console.log("webserver Port: " + webserverPort);
  console.log("webserverRootFolder : " + webserverRootFolder);
  console.log (path.sep); // checking the path seperator
  console.log(program.config);

  return new Promise(function (resolve, reject){
    var
      app = express(), // contains the whole application
      httpServer = http.createServer(app);

      app.use(express.static(webserverRootFolder));

      httpServer.listen(webserverPort, function(err){
        if (err){
          reject(err);
          return;
        }
        resolve();
      });
  });//Http Promise Ends

//}).then(functiona(){}).then(functiona(){}) // runs all these asynch in sequqnce
}).catch(function(err){
  console.log(err)
});
