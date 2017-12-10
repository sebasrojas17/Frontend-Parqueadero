'use strict';

angular.module('parqueaderoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('tarifas', {
        url: '/tarifas',
        template: '<tarifas></tarifas>'
      });
  });
