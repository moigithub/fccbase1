'use strict';
/*
router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);
*/
angular.module('base0App')
  .controller('mypollVotesCtrl', function ($scope, $http, $location, Auth) { 
    $scope.polls=[];
    $scope.error=null;

    $scope.getCurrentUser = Auth.getCurrentUser();


   	$http.get('/api/votes/uid/' + $scope.getCurrentUser._id )
    .success(function(data){
        $scope.polls=data;
    })
    .error(function(data, status) {
        $scope.error=status;
    })


    $scope.delete = function(poll){
        var pollId = poll._id;
        //console.log("delete pollID:",pollId);
        $http.delete('/api/votes/' + pollId)
        .success(function(res,err){
            console.log("polls", $scope.polls);
            //getUserPoll(); 
            var pollLeft = $scope.polls.filter(function(poll){
                return poll._id !== pollId;
            });
            $scope.polls = pollLeft;
          });
        // redirect to /votes/mypoll to refresh the list ???
    }

  });
