'use strict';

/**
 * @ngdoc overview
 * @name stmsApp
 * @description
 * # stmsApp
 *
 * Main module of the application.
 */
var app = angular
  .module('stmsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ui.router',
    'ui.bootstrap',
    'ngStorage',
    'ngSanitize'
  ]);
//.config(function ( $httpProvider) {        
//        $httpProvider.defaults.useXDomain = true;
//        $httpProvider.defaults.headers.common = 'Content-Type: application/json';
//        delete $httpProvider.defaults.headers.common['X-Requested-With'];
//    }

//)

app.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('products', {
            url: '/products',
            templateUrl: 'views/products.html',
            controller: 'productCtrl',
            controllerAs: 'productVM'
        })
        .state('favorites', {
            url: '/favorites',
            templateUrl: 'views/favorites.html',
            controller: 'favoritesCtrl',
            controllerAs: 'favoritesVM'
        })

});

app.config(['$httpProvider', function ($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
}
]);