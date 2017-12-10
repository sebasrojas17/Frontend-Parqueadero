'use strict';

angular.module('parqueaderoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('carros', {
        url: '/carros',
        template: '<carros></carros>'
      });
  });
