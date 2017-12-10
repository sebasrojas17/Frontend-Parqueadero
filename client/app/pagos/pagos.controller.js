'use strict';

(function(){

class PagosComponent {
  constructor(pagosService,$mdDialog) {
    this.pagosService = pagosService;
    this.$mdDialog = $mdDialog;
  }

  $onInit(){
  	this.consultarTotalIngresos();
  }

  consultarTotalIngresos(){
  	this.pagosService.consultarTotalIngresos().$promise
  	.then(response=>{
  		this.total = response;
  		console.log('TOTAL OK', response);
  	})
  	.catch(err=>{
  		console.log('ERROR',err);
  	});
  }

  consultarPrecio(){
  	console.log('OK?');
  	this.pagosService.consultarPrecio({placa:this.placa}).$promise
  	.then(response=>{
  		this.precio = response;
  		console.log('TOTAL OK', this.precio);
  	})
  	.catch(err=>{
  		console.log('ERROR',err);
      this.$mdDialog.show(
            this.$mdDialog.alert()
              .parent(angular.element(document.querySelector('#popupContainer')))
              .clickOutsideToClose(true)
              .title('Error al consultar precio')
              .textContent('Revisa la consola para determinar el tipo de error.')
              .ariaLabel('Alert Dialog Demo')
              .ok('Cerrar')
          );
  	});
  }

  retirar(){
  	this.pagosService.crear({placa:this.placa}).$promise
  	.then(response=>{
  		console.log('Se ha retirado el carro, PAGO CREADO',response);
  		this.consultarTotalIngresos();
  		this.$mdDialog.show(
            this.$mdDialog.alert()
              .parent(angular.element(document.querySelector('#popupContainer')))
              .clickOutsideToClose(true)
              .title('Retiro Efectuado')
              .textContent('Se ha retirado el carro, se registra nuevo pago.')
              .ariaLabel('Alert Dialog Demo')
              .ok('Cerrar')
          );
  	})
  	.catch(err=>{
  		console.log('ERROR',err);
  		this.$mdDialog.show(
            this.$mdDialog.alert()
              .parent(angular.element(document.querySelector('#popupContainer')))
              .clickOutsideToClose(true)
              .title('Error al tratar de retirar el vehiculo')
              .textContent('Revisa la consola para comprobar el tipo de error.')
              .ariaLabel('Alert Dialog Demo')
              .ok('Cerrar')
          );
  	});
  }
}

angular.module('parqueaderoApp')
  .component('pagos', {
    templateUrl: 'app/pagos/pagos.html',
    controller: PagosComponent,
    controllerAs: 'vm'
  });

})();
