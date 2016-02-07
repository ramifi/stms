/// <reference path="productSrv.js" />
'use strict';

/**
 * @ngdoc service
 * @name stmsApp.ProductSrv
 * @description
 * # ProductSrv
 * Service in the stmsApp.
 */

(function () {
    'use strict';

    angular.module('stmsApp')
      .factory('productSrv', function ($q, $http, $localStorage) {
          this.getProducts = function () {
              var deferred = $q.defer();
              $http.jsonp('http://api.bestbuy.com/beta/products/trendingViewed?apiKey=fbhsyz689gqebwehcwk965f3&callback=JSON_CALLBACK')
                .success(function (data /*, status, headers, config */) {
                    deferred.resolve(data);
                })/*
                .error(function (data, status, headers, config) {
                    console.log(status);
                    deferred.reject(status);
                })*/
              ;
              return deferred.promise;
          };

          this.addToFavorite = function (item) {
              var deferred = $q.defer();

              var favorites = $localStorage.favorites;
              if (favorites == undefined) {
                  favorites = [];
              }
              
              var index = favorites.indexOf(item);
           
              if (index == -1) {
                  favorites.push(item);
                  $localStorage.favorites = favorites;
              }
              return deferred.promise;
          };

          this.removeFromFavorite = function (item) {
              var deferred = $q.defer();

              var favorites = $localStorage.favorites;
              if (favorites == undefined) {
                  favorites = [];
              }

              var index = favorites.indexOf(item);
           
              if (index > -1) {
                  favorites.splice(index, 1);
              }
              $localStorage.favorites = favorites;

              return deferred.promise;
          };

          

          this.getFavorites = function () {
              var deferred = $q.defer();
              deferred.resolve($localStorage.favorites);
              return deferred.promise;
          };


          return this;
      });
})();
