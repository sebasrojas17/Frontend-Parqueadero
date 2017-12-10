'use strict';

(function(){

class PagosListComponent {
  constructor(pagosService) {
    this.pagosService = pagosService;
  }

  $onInit(){
  	this.pagosService.query().$promise
  	.then(response=>{
  		this.pagos = response;
  		console.log('PAGOS OK', response);
  	})
  	.catch(err=>{
  		console.log('ERROR', err);
  	});
  }
}

angular.module('parqueaderoApp')
  .component('pagosList', {
    templateUrl: 'app/pagos/pagos-list/pagos-list.html',
    controller: PagosListComponent,
    controllerAs: 'vm'
  });

})();
