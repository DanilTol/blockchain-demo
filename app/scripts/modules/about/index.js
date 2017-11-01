'use strict';

angular
  .module('blockchain.about', [
    'ngResource',
    'ngRoute',
    'ngSanitize'
  ])
  .config(function($routeProvider) {
    $routeProvider
      .when('/about', {
        templateUrl: 'scripts/modules/about/about.view.html',
        controller: 'aboutCtrl'
      });
  });
