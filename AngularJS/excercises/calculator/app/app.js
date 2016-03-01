var myapp1 = angular.module('simpleMath',[]); //second param is the dependencies

/*
//preferred approach
angular.module('myapp1',[])
  .controller('MyApp1Controller',MyApp1Controller);
*/
myapp1.controller('MathController', MathController);

function MathController(){
  var vm = this; //this does not work same as in Java
  vm.num1 = 0;
  vm.num2 = 0;
  vm.num3 = 0;
  vm.total = 0;
  vm.add = function(){
      console.log('I am going to add');
      //vm.total = parseInt(vm.num1) + parseInt(vm.num2) + parseInt(vm.num3); //if not do parseInt than its a steing so concat
      vm.total = +vm.num1 + +vm.num2 + +vm.num3; //if not do parseInt than its a steing so concat
  };
  vm.mul = function(){
      console.log('I am going to Mul');
      vm.total = vm.num1 * vm.num2 * vm.num3;
  };

}



//angular.module('myapp1') //accessing a particular module
