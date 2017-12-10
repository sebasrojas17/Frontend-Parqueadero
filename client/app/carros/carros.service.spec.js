'use strict';

describe('Service: carros', function () {

  // load the service's module
  beforeEach(module('parqueaderoApp'));

  // instantiate service
  var carros;
  beforeEach(inject(function (_carros_) {
    carros = _carros_;
  }));

  it('should do something', function () {
    expect(!!carros).to.be.true;
  });

});
