'use strict';

angular.module('blockchain.main')
  .controller('mainCtrl', ['$scope', 'mainViewModel', function($scope, vm) {
    $scope.vm = vm;
  }]);
