'use strict';

angular.module('parqueaderoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('carros-list', {
        url: '/carros-list',
        template: '<carros-list></carros-list>'
      });
  });
