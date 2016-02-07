'use strict';

describe('Service: productsSrv', function () {

  // load the service's module
  beforeEach(module('stmsApp'));

  // instantiate service
  var productsSrv;
  beforeEach(inject(function (_productsSrv_) {
    productsSrv = _productsSrv_;
  }));

  it('should do something', function () {
    expect(!!productsSrv).toBe(true);
  });

});
