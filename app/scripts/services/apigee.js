'use strict';

angular.module('ridewithmeApp')
  .factory('apigee', function() {
    // Service logic
    // ...

    var client = new Usergrid.Client({
      orgName: 'hukuuu',
      appName: 'ridewithme'
    });

    // Public API here
    return {
      client: client
    };
  });