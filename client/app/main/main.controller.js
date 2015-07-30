'use strict';

angular.module('base0App')
  .controller('MainCtrl', function ($scope, $http, Auth, $location) {
    //$scope.awesomeThings = [];

    // if user already logged in.. redirect to  /votes
    var loggedIn = Auth.isLoggedIn();
    console.log(loggedIn);
    if (loggedIn) {
      $location.path('/votes');
    }
/*
    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });

    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };
*/
  });
