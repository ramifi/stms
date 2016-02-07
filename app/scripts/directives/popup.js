(function () {
    'use strict';
    var scripts = document.getElementsByTagName("script")
    var currentScriptPath = scripts[scripts.length - 1].src;

    app.directive('popup', function () {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: currentScriptPath.replace('popup.js', 'popup.html'),
            scope: {
                show: '=',
                item: '=',
                remove: '='
            },
            controller: function ($scope, productSrv) {

                if ($scope.remove) {
                    $("#submit").val("Remove from favorite");
                }

                $scope.submit = function () {
                    $("#popupModal").modal('hide');
                    $scope.show = false;
                    if ($scope.remove) {
                        productSrv.removeFromFavorite($scope.item);
                    }
                    else {
                        productSrv.addToFavorite($scope.item);
                    }
                };

                $scope.cancel = function () {
                    $scope.show = false;
                    $("#popupModal").modal('hide');
                };
                $scope.$watch('show', function () {
                    if ($scope.show) {
                        $("#popupModal").modal('show');
                    };
                });
            }
        };
    });

})();