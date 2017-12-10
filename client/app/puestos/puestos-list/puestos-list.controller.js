'use strict';

(function(){

class PuestosListComponent {
  constructor(puestosService) {
    this.puestosService = puestosService;
  }

  $onInit(){
  	this.puestosService.query().$promise
  	.then(response=>{
  		this.puestos = response;
  		console.log('PUESTOS OK', response);
  	})
  	.catch(err=>{
  		console.log('ERROR', err);
  	});
  }
}

angular.module('parqueaderoApp')
  .component('puestosList', {
    templateUrl: 'app/puestos/puestos-list/puestos-list.html',
    controller: PuestosListComponent,
    controllerAs: 'vm'
  });

})();
