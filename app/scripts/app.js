'use strict';

angular.module('ridewithmeApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/createRide', {
        templateUrl: 'views/createRide.html',
        controller: 'CreaterideCtrl'
      })
      .when('/searchRide', {
        templateUrl: 'views/searchRide.html',
        controller: 'SearchrideCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
