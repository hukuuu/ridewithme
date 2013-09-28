'use strict';

angular.module('ridewithmeApp')
	.directive('autocomplete', function() {
		return {
			template: '<input type="text"></input>',
			restrict: 'E',
			replace: true,
			scope: {
				onChange: '='
			},
			link: function postLink(scope, element, attrs) {
				var autocomplete = new google.maps.places.Autocomplete(element[0], {
					types: ['(cities)']
				});
				google.maps.event.addListener(autocomplete, 'place_changed', function() {
					var place = autocomplete.getPlace();
					scope.onChange(place);
				});
				element.bind('focusout',function () {
					if (element.val().trim() ==='') {
						scope.onChange({});
					};
				})
			}
		};
	});