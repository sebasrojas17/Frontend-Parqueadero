'use strict';

(function(){

class TarifasComponent {
  constructor(tarifasService) {
    this.tarifasService = tarifasService;
  }

  $onInit(){
  	this.obtenerTarifa();
  }

  obtenerTarifa(){
  	this.tarifasService.get({id:1}).$promise
  	.then(response=>{
  		this.tarifa = response;
  		console.log('TARIFA OK', response);
  	})
  	.catch(err=>{
  		console.log('ERROR',err);
  	});
  }

  actualizar(){
  	this.tarifasService.actualizar({valor:this.valor}).$promise
  	.then(response=>{
  		this.obtenerTarifa();
  		console.log('TARIFA ACTUALIZADA', response);
  	})
  	.catch(err=>{
  		console.log('ERROR',err);
  	});
  }
}

angular.module('parqueaderoApp')
  .component('tarifas', {
    templateUrl: 'app/tarifas/tarifas.html',
    controller: TarifasComponent,
    controllerAs: 'vm'
  });

})();
