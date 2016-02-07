'use strict';

describe('Controller: FavoritesctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('stmsApp'));

  var FavoritesctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FavoritesctrlCtrl = $controller('FavoritesctrlCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(FavoritesctrlCtrl.awesomeThings.length).toBe(3);
  });
});
