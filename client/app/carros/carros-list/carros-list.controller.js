'use strict';

(function(){

class CarrosListComponent {
  constructor(carrosService) {
    this.carrosService = carrosService;
  }

  $onInit(){
  	this.carrosService.query().$promise
  	.then(response=>{
  		console.log('CARROS OK', response);
  		this.carros = response;
  	})
  	.catch(err=>{
  		console.log('ERROR', err);
  	});
  }
}

angular.module('parqueaderoApp')
  .component('carrosList', {
    templateUrl: 'app/carros/carros-list/carros-list.html',
    controller: CarrosListComponent,
    controllerAs: 'vm'
  });

})();
