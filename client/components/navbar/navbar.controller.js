'use strict';

(function(){

class NavbarController {

  constructor($interval) {
    this.menu = [{
      'title': 'Home',
      'state': 'main'
    },{
      'title': 'Retirar carro',
      'state': 'pagos'
    },{
      'title': 'Ingresar carro',
      'state': 'carros'
    },{
      'title': 'Modificar tarifa',
      'state': 'tarifas'
    },{
      'title': 'Lista puestos',
      'state': 'puestos-list'
    },{
      'title': 'Lista Carros',
      'state': 'carros-list'
    },{
      'title': 'Lista Pagos',
      'state': 'pagos-list'
    }];
    this.$interval = $interval;
    this.clock = Date.now();
    this.isCollapsed = true;
  }

  $onInit(){
    this.$interval(() => this.tick(),1000);
  }

  tick(){
    this.clock = Date.now();
  }
}

angular.module('parqueaderoApp')
  .component('navbar', {
    templateUrl: 'components/navbar/navbar.html',
    controller: NavbarController,
    controllerAs: 'vm'
  });

})();