'use strict';

angular.module('base0App')  //, 
  .controller('viewPollVotesCtrl', viewPollVotesCtrl);

viewPollVotesCtrl.$inject=['$scope', '$routeParams', '$location', '$anchorScroll'];
function viewPollVotesCtrl($scope, $routeParams, $location, $anchorScroll) {  
    
    $location.hash($routeParams.id);
    // call $anchorScroll()
    $anchorScroll();
    console.log($location);
  };
