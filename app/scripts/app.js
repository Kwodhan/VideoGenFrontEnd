'use strict';

/**
 * @ngdoc overview
 * @name videoGenApp
 * @description
 * # videoGenApp
 *
 * Main module of the application.
 */
angular
  .module('videoGenApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/choixfilm/:id', {
        templateUrl: 'views/choixfilm.html',
        controller: 'ChoixfilmCtrl',
        controllerAs: 'choixfilm'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
