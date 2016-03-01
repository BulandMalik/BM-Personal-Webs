//iffy
(function() {

  angular.module('app.product')
    .controller('Products',Products);

  function Products(){
    var vm = this;
    vm.products = [
      {name: 'Chair', price:50, category: 'furniture'},
      {name: 'Grapes', price:5, category: 'food'},
      {name: 'Chicken', price:10, category: 'food'},
      {name: 'Camera', price:100, category: 'electronic'}
    ];
  };

})();
