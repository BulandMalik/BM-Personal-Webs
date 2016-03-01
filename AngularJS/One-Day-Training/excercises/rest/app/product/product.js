//iffy
(function() {

  angular.module('app.product')
    .controller('Products',Products);

  function Products($http){
    var vm = this;
    vm.products = [];

    activate();

    //Promise / Event Loop
    function activate(){
      $http.get('http://localhost:3000/products') //only calls once the current code finishes
        .success(function(data) {
          vm.products = data;
        })
        .catch(function(err) { //in case of error
          console.log(err);
        });
    };

/*
    //creating a product
    vm.addProduct = function(){
        var product = {
          productName: vm.productName;
          cost: cost
        };

        $http.post ('http://localhost:3000/products',JSON.stringify(product))
          .success(function(data) {
            console.log('product created:'+data);
          })
          .catch(function(err) {
            console.log(err);
          });
    };
*/
  };

})();
