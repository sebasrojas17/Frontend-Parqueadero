'use strict';

describe('Component: PagosComponent', function () {

  // load the controller's module
  beforeEach(module('parqueaderoApp'));

  var PagosComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    PagosComponent = $componentController('pagos', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
