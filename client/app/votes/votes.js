'use strict';

angular.module('base0App')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/votes/mypolls', {  // only my own poll
        templateUrl: 'app/votes/mypoll.html',
        controller: 'mypollVotesCtrl',
        authenticate: true
      })
      .when('/votes/newpoll', { // create new poll
        templateUrl: 'app/votes/newpoll.html',
        controller: 'newpollVotesCtrl',
        authenticate: true
      })
      .when('/votes/viewpoll/:id', { // create new poll
        templateUrl: 'app/votes/viewpoll.html',
        controller: 'viewPollVotesCtrl'
      })

      ;
  });
