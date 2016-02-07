(function () {
    'use strict';

    angular
        .module('stmsApp')
        .controller('productCtrl', productCtrl);

    productCtrl.$inject = ['productSrv'];

    function productCtrl(productSrv) {
        /* jshint validthis:true */
        var vm = this;

        vm.showPopup = function (item) {
            vm.isShowPopup = true;
            vm.currentItem = item
        };
        activate();

        function activate() {
            vm.isShowPopup = false;
            productSrv.getProducts().then(
             function (result) {
                 vm.products = result;
             },
             function (error) {
                 alert("התרחשה תקלה");
             }
         );

        }
    }
})();
