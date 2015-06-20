'use strict';

angular.module('eFolio')
  .controller('MainCtrl', function ($scope, $state) {
    $scope.bigplus = true;
    $scope.$state = $state;
    $scope.timenow = false;
    $scope.date = new Date();

  });
