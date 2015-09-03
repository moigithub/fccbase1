'use strict';

viewPollVotesCtrl.$inject=['$scope', '$routeParams', '$location', '$anchorScroll'];
angular.module('base0App')  //, 
  .controller('viewPollVotesCtrl', function ($scope, $routeParams, $location, $anchorScroll) {  
    
    $location.hash($routeParams.id);
    // call $anchorScroll()
    $anchorScroll();
    console.log($location);
  });
