var routerApp = angular.module('routerApp', ['ui.router']);

/*
routerApp.factory("Post", function($resource) {
  return $resource("/v1/cache/on-demand-invalidate");
});
*/

routerApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'partial-home.html'
        })

        // nested list with custom controller
        .state('home.list', {
            url: '/list',
            templateUrl: 'partial-home-list.html',
            controller: function($scope) {
                $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
            }
        })

        // nested list with custom controller
        .state('home.cacheinvalidate', {
            url: '/v1/cache/invalidate',
            templateUrl: 'cache-invalidate.html',
            controller: 'invalidateCacheCtrl'
        })

        // nested list with just some random string data
        .state('home.paragraph', {
            url: '/paragraph',
            template: 'I could sure use a drink right now.'
        })

        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            url: '/about',
            views: {
                '': { templateUrl: 'partial-about.html' },
                'columnOne@about': { template: 'Look I am a column!' },
                'columnTwo@about': {
                    templateUrl: 'table-data.html',
                    controller: 'scotchController'
                }
            }

        });

});

/*
routerApp.controller("invalidateCacheCtrl", function($scope, Post) {
  Post.query(function(data) {
    $scope.posts = data;
  });
});
*/

routerApp.controller("invalidateCacheCtrl", function($scope, $http) {
   $http.get('http://localhost:8080/webs-pri-cacheinvalidation-api/v1/cache/on-demand-invalidate').
       then(function(response) {
           $scope.response = response.data;
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
