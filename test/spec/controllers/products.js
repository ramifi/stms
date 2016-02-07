'use strict';

describe('Controller: ProductsctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('stmsApp'));

  var ProductsctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProductsctrlCtrl = $controller('ProductsctrlCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ProductsctrlCtrl.awesomeThings.length).toBe(3);
  });
});
