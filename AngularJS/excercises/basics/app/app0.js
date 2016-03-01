var myapp1 = angular.module('myapp1',[]); //secodn param is the dependencies

/*
//preferred approach
angular.module('myapp1',[])
  .controller('MyApp1Controller',MyApp1Controller);
*/
myapp1.controller('MyAppController', MyAppController);

function MyAppController($scope){ //scope connect controller with the view, two way bindings
  //controller code
  $scope.name = 'Buland Malik';
  $scope.names = ['Buland','Qaim'];
  $scope.fnames = ['Buland','Qaim'];
  $scope.lnames = ['Altaf','Altaf'];
}



//angular.module('myapp1') //accessing a particular module
