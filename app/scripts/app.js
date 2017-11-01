'use strict';

angular
  .module('blockchainDemoApp', [
    // 'ngAnimate',
    // 'ngCookies',
    // 'ngResource',
    // 'ngRoute',
    // 'ngSanitize',
    // 'ngTouch',
    'blockchain.main',
    'blockchain.about'
  ])
  .config(function($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });
  });
