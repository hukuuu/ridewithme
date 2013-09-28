'use strict';

angular.module('ridewithmeApp')
	.controller('SearchrideCtrl', function($scope, apigee) {
		var client = apigee.client;
		$scope.letters = "abcdefghijklmnopq";
		var ride = {
			from: {},
			to: {}
		};
		$scope.ride = ride;
		$scope.rides = [];

		$scope.fromChanged = function(place) {
			updateRide(ride.from, place);
		}
		$scope.toChanged = function(place) {
			updateRide(ride.to, place);
		}

		$scope.search = function(ride) {
			window.ride  = ride;
			console.log('submitting ride: ', ride);
			console.log(JSON.stringify(ride));

			var qs = {
				ql: "select *"
			};
			if (ride.from.id && ride.from.id !== '')
				qs.ql += " where from.id = '" + ride.from.id + "'";
			if (ride.to.id && ride.to.id !== '') {
				qs.ql += getPrefix(qs.ql) + "to.id = '" + ride.to.id + "'";
			}
			if (ride.when && ride.when !== '') {
				qs.ql += getPrefix(qs.ql) + "when = '" + ride.when + "'";
			}
			if (ride.seats) {
				qs.ql += getPrefix(qs.ql) + "seats = '" + ride.seats + "'";
			};
			function getPrefix (query) {
				return (query.indexOf('where') !== -1)? ' and ' : ' where ';
			}


			var options = {
				method: 'GET',
				endpoint: 'rides',
				qs: qs
			};
			console.log('options: ',options);
			client.request(options, function(err, data) {
				if (err) {
					// Error - POST failed
					console.log('err');
				} else {
					console.log('message');
					$scope.$apply(function() {
						$scope.rides = data.entities;
					})
					// Data will contain raw results from API call
					// Success - POST worked
				}
				console.log('data', data);
			});

		}

		function updateRide(entity, place) {
			entity.id = place.id;
			entity.name = place.name;
		}
	});