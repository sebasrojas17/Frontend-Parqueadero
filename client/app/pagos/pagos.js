'use strict';

angular.module('parqueaderoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('pagos', {
        url: '/pagos',
        template: '<pagos></pagos>'
      });
  });
