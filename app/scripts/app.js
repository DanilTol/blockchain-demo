'use strict';

angular
  .module('blockchainDemoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'mainModule'
  ]);
// .config(function($routeProvider) {
//   $routeProvider
//     .when('/', {
//       templateUrl: 'views/main.html',
//       controller: 'MainCtrl',
//       controllerAs: 'main'
//     })
//     .when('/about', {
//       templateUrl: 'views/about.html',
//       controller: 'AboutCtrl',
//       controllerAs: 'about'
//     })
//     .otherwise({
//       redirectTo: '/'
//     });
// });
