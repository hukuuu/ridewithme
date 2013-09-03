'use strict';

describe('Controller: RideCtrl', function () {

  // load the controller's module
  beforeEach(module('ridewithmeApp'));

  var RideCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RideCtrl = $controller('RideCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
