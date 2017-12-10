'use strict';

describe('Service: pagos', function () {

  // load the service's module
  beforeEach(module('parqueaderoApp'));

  // instantiate service
  var pagos;
  beforeEach(inject(function (_pagos_) {
    pagos = _pagos_;
  }));

  it('should do something', function () {
    expect(!!pagos).to.be.true;
  });

});
