'use strict';

angular.module('base0App')  //, 
  .controller('viewPollDataCtrl', 
    function ($scope, $http, $modalInstance, $routeParams, Auth, PollData) {  //$location, 

      $scope.poll = PollData;

      //console.log("pollData",PollData);

      $scope.error=null;
      $scope.choice={};

      $scope.getCurrentUser = Auth.getCurrentUser();
      $scope.loggedIn = Auth.isLoggedIn;

      // check if user picked any option, 
      // validate submit, not allow send empty votes
      $scope.validChoice = function(){
        return Object.keys($scope.choice).length<1;
      };

  ///////// chartjs

      function calcVotes(data){
        // for each poll Option count how many votes have
        return data.pollOptions.map(function(option){
          return data.usersVote.filter(function(vote){ 
          //  console.log(vote.pollName," : ",option, vote);
            return vote["pollOption"]===option;
          }).length;
        }); 
      }

      $scope.labels = $scope.poll.pollOptions;
      $scope.data   = calcVotes($scope.poll);

      // which vote is selected
      //"usersVote":[{"pollOption":"22","uid":"55e7403f3eeaab9a184801e6"}]
      // if loggedIn
      if($scope.loggedIn()){
        $scope.choice.vote = $scope.poll["usersVote"].filter(function(vote){
          return vote["uid"] === $scope.getCurrentUser._id;
        })[0]["pollOption"];
      }
/////////// fin chart js


      $scope.submit = function(){
          // if el user ya voto.. cambiar voto
          // remove user vote.. if exist, then add again
          // aka. change vote. not allow vote twice+
          var votes = $scope.poll["usersVote"].filter(function(userVote){
            return userVote.uid !== $scope.getCurrentUser._id
          });

          votes.push({"uid": $scope.getCurrentUser._id, "pollOption":$scope.choice.vote});
          //console.log(votes);

          // update userVotes
          $scope.poll["usersVote"] = votes;

          // update
          $http.put('/api/votes/'+$scope.poll._id, {"usersVote": votes} ).
          success(function(data, status, headers, config) {
            // update chart data
            $scope.data   = calcVotes(data);
          }).
          error(function(data, status, headers, config) {
            //console.log("error ", status, headers);
          });
          
      } // fin submit function



      /// modal window buttons
      $scope.ok = function () {
        // return modified poll
        $modalInstance.close($scope.poll);
      };

      $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
      };
  }); // fin controller
