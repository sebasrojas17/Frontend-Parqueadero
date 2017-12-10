'use strict';

describe('Component: CarrosComponent', function () {

  // load the controller's module
  beforeEach(module('parqueaderoApp'));

  var CarrosComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    CarrosComponent = $componentController('carros', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
