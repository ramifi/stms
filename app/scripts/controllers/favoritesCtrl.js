(function () {
    'use strict';

    angular
        .module('stmsApp')
        .controller('favoritesCtrl', favoritesCtrl);

    favoritesCtrl.$inject = ['productSrv'];

    function favoritesCtrl(productSrv) {
        /* jshint validthis:true */
        var vm = this;

        vm.showPopup = function (item) {
            vm.isShowPopup = true;
            vm.currentItem = item
        };
        activate();

        function activate() {
            vm.isShowPopup = false;
            productSrv.getFavorites().then(
             function (result) {
                 vm.favorites = result;
             },
             function (error) {
                 alert("Error!!!");
             }
         );

        }
    }
})();
