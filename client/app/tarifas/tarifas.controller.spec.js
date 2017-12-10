'use strict';

describe('Component: TarifasComponent', function () {

  // load the controller's module
  beforeEach(module('parqueaderoApp'));

  var TarifasComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    TarifasComponent = $componentController('tarifas', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
