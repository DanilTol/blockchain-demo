'use strict';

angular
  .module('blockchain.main', [
    'ngResource',
    'ngRoute',
    'ngSanitize'
  ])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'scripts/modules/main/main.view.html',
        controller: 'mainCtrl'
      });
  });
