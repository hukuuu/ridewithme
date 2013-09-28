'use strict';

angular.module('ridewithmeApp')
	.controller('LoginCtrl', function($scope, apigee, $q) {
		console.log('apigee client', apigee);
		window.$q = $q;

		var client = window.client = apigee.client;

		$scope.login = function(username, password) {
			console.log('login for ', username + ' ' + password);
			client.login(username, password, function(error, response, par) {

				if (error) {
					console.log('error', error);
				} else {
					alert('successfull login !');
				}
				checkUser();
			});

		}

		$scope.logout = function() {
			console.log('logout...');
			client.logout(function() {
				console.log('logout...');
			});
			checkUser();
		}

		function checkUser() {
			var message;
			client.getLoggedInUser(function(err, resp) {
				if (err) {
					message = 'you are not logged in...';
				} else {
					message = 'Hi ' + resp.entities[0].name;
				}
				$scope.$apply(function() {
					$scope.message = message;
				})
			});
		}


	});