'use strict';

//var IndexConfig = function(urlRouterProvider, $locationProvider) {
//  $urlRouterProvider.otherwise('/');
//  $locationProvider.html5mode(false);
//};

angular.module('eFolio', ['ngTouch', 'ngResource', 'ui.router', 'ui.bootstrap'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .state('projects', {
        url: '/projects',
        templateUrl: 'app/projects/projects.html',
        controller: 'ProjectsCtrl'
      }).state('media', {
        url: '/media',
        templateUrl: 'app/media/media.html',
        controller: 'ProjectsCtrl'
      });

    $urlRouterProvider.otherwise('/');
  })
;

