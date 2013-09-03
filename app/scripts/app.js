'use strict';

angular.module('ridewithmeApp', ['http-auth-interceptor'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .when('/search', {
        templateUrl: 'views/search.html',
        controller: 'SearchCtrl'
      })
      .when('/ride', {
        templateUrl: 'views/ride.html',
        controller: 'RideCtrl'
      })
      .when('/user', {
        templateUrl: 'views/user.html',
        controller: 'UserCtrl'
      })
      .when('/signup', {
        templateUrl: 'views/signup.html',
        controller: 'SignupCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
