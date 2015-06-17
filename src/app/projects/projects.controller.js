'use strict';

angular.module('eFolio')
  .controller('ProjectsCtrl', function ($scope) {
    $scope.projects = [
      'Launduree',
      'Tilman Manufacturing',
      'Mizu Fusion',
      'SwapDistrict(AUBookSwap)',
      'Capitol Group',
      'BuzzKey',
      'Micronite Technologies',
      'Graffiti BBDO'
    ];
  });
