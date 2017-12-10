'use strict';

describe('Component: PuestosListComponent', function () {

  // load the controller's module
  beforeEach(module('parqueaderoApp'));

  var PuestosListComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    PuestosListComponent = $componentController('puestos-list', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
