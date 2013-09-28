'use strict';

angular.module('ridewithmeApp')
  .factory('userService', function($q, apigee) {

    var client = apigee.client;

    function getLoggedInUser(callback) {
      var deffered = $q.defer();
      client.getLoggedInUser(callback);

      return deffered.promise;
    }

    return {
      getUser: getLoggedInUser
    };
  });