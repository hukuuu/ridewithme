'use strict';

angular.module('ridewithmeApp')
	.controller('CreaterideCtrl', function($scope, apigee, rideService, $q, userService) {
		window.$q = $q;
		var client = apigee.client;
		var ride = {
			from: {},
			to: {},
			when: {}
		};
		$scope.ride = ride;

		$scope.fromChanged = function(place) {
			console.log('place...', place);
			updateRide(ride.from, place);
		}
		$scope.toChanged = function(place) {
			console.log('place...', place);
			updateRide(ride.to, place);
		}

		$scope.submit = function(ride) {
			console.log('submitting ride: ', ride);

			userService.getUser(function(err, data) {
				if (err) {
					console.log('no current user...');
				} else {
					var user = data.entities[0];
					ride.owner = {
						picture: user.picture,
						name: user.name,
						path: user.metadata.path
					};
					rideService.create(ride,function (err,data) {
						if(err) {
							console.log('failed...');
						} else {
							console.log('success');
						}
					});
				}
			})

		}

		function updateRide(entity, place) {
			entity.id = place.id;
			entity.name = place.name;
		}
	});