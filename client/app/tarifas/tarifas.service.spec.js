'use strict';

describe('Service: tarifas', function () {

  // load the service's module
  beforeEach(module('parqueaderoApp'));

  // instantiate service
  var tarifas;
  beforeEach(inject(function (_tarifas_) {
    tarifas = _tarifas_;
  }));

  it('should do something', function () {
    expect(!!tarifas).to.be.true;
  });

});
