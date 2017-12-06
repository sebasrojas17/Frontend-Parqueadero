'use strict';

angular.module('parqueaderoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('parqueadero', {
        url: '/parqueadero',
        template: '<parqueadero></parqueadero>'
      });
  });
