'use strict';

angular.module('base0App')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/votes/viewpoll/:id', { // create new poll
        templateUrl: 'app/votes/viewpoll.html',
        controller: 'viewPollVotesCtrl'
      })
      .when('/votes/mypolls', {  // only my own poll
        templateUrl: 'app/main/main.html',
        controller: 'mypollVotesCtrl',
        authenticate: true
      })
      .when('/votes/newpoll', { // create new poll
        templateUrl: 'app/votes/newpoll.html',
        controller: 'newpollVotesCtrl',
        authenticate: true
      })
      .when('/votes/viewpoll/:id', { // scroll to the :id poll
        templateUrl: 'app/main/main.html',
        controller: 'viewPollVotesCtrl'
      })

      ;
  });
