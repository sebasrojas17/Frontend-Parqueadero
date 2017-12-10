'use strict';

describe('Component: PagosListComponent', function () {

  // load the controller's module
  beforeEach(module('parqueaderoApp'));

  var PagosListComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    PagosListComponent = $componentController('pagos-list', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
