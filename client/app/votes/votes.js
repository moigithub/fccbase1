'use strict';

angular.module('base0App')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/votes', { // all poll from all users
        templateUrl: 'app/votes/votes.html',
        controller: 'VotesCtrl'
      })
      .when('/votes/mypolls', {  // only my own poll
        templateUrl: 'app/votes/mypoll.html',
        controller: 'mypollVotesCtrl'
      })
      .when('/votes/newpoll', { // create new poll
        templateUrl: 'app/votes/newpoll.html',
        controller: 'newpollVotesCtrl'
      })
      .when('/votes/viewpoll/:id', { // create new poll
        templateUrl: 'app/votes/viewpoll.html',
        controller: 'viewPollVotesCtrl'
      })

      ;
  });
