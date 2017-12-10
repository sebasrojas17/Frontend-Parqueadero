'use strict';

describe('Component: CarrosListComponent', function () {

  // load the controller's module
  beforeEach(module('parqueaderoApp'));

  var CarrosListComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    CarrosListComponent = $componentController('carros-list', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
