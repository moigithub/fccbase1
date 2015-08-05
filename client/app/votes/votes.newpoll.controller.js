'use strict';

angular.module('base0App')  
  .controller('newpollVotesCtrl', function ($scope, $http, $location, Auth) {
    $scope.placeholders = ["Pepsi", "Coca-cola"];
    $scope.pollOptions=[];
    $scope.pollName="";
    $scope.pollExist=false;
    
    $scope.getCurrentUser = Auth.getCurrentUser();
//console.log(JSON.stringify($scope.getCurrentUser));

    $scope.newOption= function(){
      $scope.placeholders.push("new Poll");
    }


    $scope.submit = function(){
      //check for duplicate names poll
      $http.get("/api/votes/pollname/"+$scope.pollName).success(function(data, status, headers, config){
        console.log("name existsss???... ",data);
        if(data.length>0) {
          $scope.pollExist=true;
        } else {
          var newpoll = { "createdBy": $scope.getCurrentUser._id,
                          "pollName": $scope.pollName,
                          "pollOptions": $scope.pollOptions,
                          "usersVote": [] };
          $http.post('/api/votes', newpoll).
          success(function(data, status, headers, config) {
            // this callback will be called asynchronously
            // when the response is available
            console.log("post new OK", status, headers, data);


// show poll link
// instead of redirect
            $location.path("/votes/mypolls");
            $scope.$apply();
          }).
          error(function(data, status, headers, config) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            console.log("new post error ", status, headers);
          });          
        }
      });
      
    }

    /*
var VotesSchema = new Schema({
    // _id: Number // autogenerated 
    createdBy:String,
    pollName: String,
    pollOptions: Array,
    usersVote: Array  // {uid:_id,pollName,""}
    //placeholders: Array
});
    */

  });
