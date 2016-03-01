var myapp1 = angular.module('myapp1',[]); //secodn param is the dependencies

/*
//preferred approach
angular.module('myapp1',[])
  .controller('MyApp1Controller',MyApp1Controller);
*/
myapp1.controller('MyAppController', MyAppController);

function MyAppController(){
  var vm = this; //this does not work same as in Java
  vm.name = 'Buland Malik';
  vm.age = 33;
}



//angular.module('myapp1') //accessing a particular module
