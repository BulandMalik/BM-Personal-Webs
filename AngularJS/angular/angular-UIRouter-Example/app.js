var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'partial-home.html'
        })

        // nested list with custom controller
        /*.state('home.list', {
            url: '/list',
            templateUrl: 'partial-home-list.html',
            controller: function($scope) {
                $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
            }
        })*/

        // nested list with custom controller
        .state('home.cacheinvalidate', {
            url: '/invalidateCache',
            templateUrl: 'cache-invalidate.html',
            controller: 'invalidateCacheCtrl'
        })

        // nested list with just some random string data
        .state('home.paragraph', {
            url: '/paragraph',
            template: 'I could sure use a drink right now.'
        });

        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        /*.state('about', {
            url: '/about',
            views: {
                '': { templateUrl: 'partial-about.html' },
                'columnOne@about': { template: 'Look I am a column!' },
                'columnTwo@about': {
                    templateUrl: 'table-data.html',
                    controller: 'scotchController'
                }
            }

        });*/

});

/*
routerApp.controller('sanitizeHtmlCtrl', ['$scope', '$sce', function($scope, $sce) {
 $scope.deliberatelyTrustDangerousSnippet = function() {
   return $sce.trustAsHtml($scope.response);
 }
});


routerApp.controller("invalidateCacheCtrl", function($scope, $http,$sce) {
   $http.get('http://localhost:8080/webs-pri-cacheinvalidation-api/v1/cache/on-demand-invalidate').
       then(function(response) {
           <!--alert("response.data:"+response.data);-->
           $scope.rawHtml = $sce.trustAsHtml(response.data)
           $scope.response = response.data;
         });
});
*/

routerApp.controller("invalidateCacheCtrl", function($scope, $http) {
   $http.get('http://localhost:8080/webs-pri-cacheinvalidation-api/v1/cache/on-demand-invalidate').
       then(function(response) {
           <!--alert("response.data:"+response);-->
           console.log("response.status:"+response.status);
           console.log("response.statusText:"+response.statusText);
           <!--console.log("response.headers:"+response.headers);-->
           console.log("response.data.cacheItems.length:"+response.data.cacheItems.length);
           console.log("response.data.cacheItems[0]:"+response.data.cacheItems[0]);
           $scope.response = response.data.cacheItems;
         });
});

routerApp.controller('scotchController', function($scope) {

    $scope.message = 'test';

    $scope.scotches = [
        {
            name: 'Macallan 12',
            price: 50
        },
        {
            name: 'Chivas Regal Royal Salute',
            price: 10000
        },
        {
            name: 'Glenfiddich 1937',
            price: 20000
        }
    ];

});
