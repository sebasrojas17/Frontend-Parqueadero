'use strict';

angular.module('parqueaderoApp', [
  'parqueaderoApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'angularMoment',
  'ngMaterial',
  'ngAnimate',
  'ngMessages',
])
.constant('API','http://localhost:8080/Backend-Parqueadero/')
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
