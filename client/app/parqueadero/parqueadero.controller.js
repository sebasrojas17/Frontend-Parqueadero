'use strict';
(function(){

class ParqueaderoComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('parqueaderoApp')
  .component('parqueadero', {
    templateUrl: 'app/parqueadero/parqueadero.html',
    controller: ParqueaderoComponent
  });

})();
