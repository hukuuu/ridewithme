'use strict';

angular.module('ridewithmeApp')
  .filter('limit', function () {
    return function (input, limit) {
    	if(!input) return;
    	return input.substring(0,limit) + '...';
    };
  });
