'use strict';

(function(){

class CarrosComponent {
  constructor(carrosService, puestosService,$mdDialog) {
  	this.carrosService = carrosService;
  	this.puestosService = puestosService;
    this.$mdDialog = $mdDialog;
  }

  $onInit(){
  	this.contarPuestos();
  }

  contarPuestos(){
  	this.puestosService.contarPuestos().$promise
  	.then(response=>{
  		this.cantidadPuestos = response;
  		console.log('PUESTOS', response);
  	})
  	.catch(err =>{
  		console.log('ERROR', err);
  	});
  }

  create(){
  	this.carrosService.crear({placa:this.placa}).$promise
  	.then(response=>{
  		console.log('CREATE OK', response);
  		this.contarPuestos();
  		this.$mdDialog.show(
            this.$mdDialog.alert()
              .parent(angular.element(document.querySelector('#popupContainer')))
              .clickOutsideToClose(true)
              .title('El vehiculo se ha ingresado correctamente')
              .textContent('Se ha ingresado el vehiculo y se le ha asignado un puesto disponible.')
              .ariaLabel('Alert Dialog Demo')
              .ok('Cerrar')
          );
  	})
  	.catch(err=>{
  		console.log('ERROR', err);
  		this.$mdDialog.show(
            this.$mdDialog.alert()
              .parent(angular.element(document.querySelector('#popupContainer')))
              .clickOutsideToClose(true)
              .title('Error al ingresar el vehiculo')
              .textContent('Revisa la consola para determinar el tipo de error.')
              .ariaLabel('Alert Dialog Demo')
              .ok('Cerrar')
          );
  	});
  }
}

angular.module('parqueaderoApp')
  .component('carros', {
    templateUrl: 'app/carros/carros.html',
    controller: CarrosComponent,
    controllerAs: 'vm'
  });

})();
