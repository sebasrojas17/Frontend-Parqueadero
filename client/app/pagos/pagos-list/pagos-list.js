'use strict';

angular.module('parqueaderoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('pagos-list', {
        url: '/pagos-list',
        template: '<pagos-list></pagos-list>'
      });
  });
