'use strict';

angular.module('ridewithmeApp')
    .factory('rideService', function($q, apigee) {

        var client = apigee.client;

        function create(ride, callback) {
            var options = {
                method: 'POST',
                endpoint: 'rides',
                body: ride
            };
            client.request(options, callback);
        };

        // Public API here
        return {
            create: create
        };
    });