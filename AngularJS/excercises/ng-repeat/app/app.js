
(function() {
  // the code here is executed once in its own scope
  angular.module('myStoreApp',[])
    .controller('Product', Product)
    .controller('HR', HR);

  function Product(){
    var vm = this; //this does not work same as in Java
    vm.products = [
      {name: 'Chair', price:50, category: 'furniture'},
      {name: 'Grapes', price:5, category: 'food'},
      {name: 'Chicken', price:10, category: 'food'},
      {name: 'Camera', price:100, category: 'electronic'}
    ];
  };

  function HR(){
    var vm = this; //this does not work same as in Java
    vm.employees = [
      {name: 'Paul', age:20, desig: 'Software Engineer'},
      {name: 'Buland', age:25, desig: 'Stafff Software Engineer'},
      {name: 'Qasim', age:30, desig: 'Architect'},
      {name: 'Bob', age:45, desig: 'Manager'}
    ];
  };

})();
