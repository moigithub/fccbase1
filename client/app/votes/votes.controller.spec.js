'use strict';

describe('Controller: VotesCtrl', function () {

  // load the controller's module
  beforeEach(module('base0App'));

  var VotesCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    VotesCtrl = $controller('VotesCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
