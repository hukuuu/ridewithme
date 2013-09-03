'use strict';

angular.module('ridewithmeApp')
  .factory('apigee', function() {
    console.log('message');
    var client = new Usergrid.Client({
      orgName: 'hukuuu',
      appName: 'ridewithme'
    });

    window.client = client;
    return client;
  });