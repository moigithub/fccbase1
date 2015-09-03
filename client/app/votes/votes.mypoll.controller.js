'use strict';
/*
router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);
*/
mypollVotesCtrl.$inject=['$scope', '$http', '$modal',  '$location', 'Auth'];
angular.module('base0App')
  .controller('mypollVotesCtrl', function ($scope, $http, $modal,  $location, Auth) { 
    $scope.pageTitle="My Polls";
    $scope.polls=[];
    $scope.error=null;

    $scope.getCurrentUser = Auth.getCurrentUser();
    $scope.loggedIn = Auth.isLoggedIn;

   	$http.get('/api/votes/uid/' + $scope.getCurrentUser._id )
    .success(function(data){
        $scope.polls=data;
    })
    .error(function(data, status) {
        $scope.error=status;
    })

    // check which page i am
    $scope.isPage =function(page) {
      return page === $scope.pageTitle;
    };


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


    // modal window
    $scope.open = function (size, poll) {

        var modalInstance = $modal.open({
          animation: true,
          templateUrl: 'app/main/viewpolldata.html',
          controller: 'viewPollDataCtrl',
          size: size,
          resolve: {
            PollData: function () {
              return poll; // pass data from this controller to modal window controller
            }
          }
        });

        modalInstance.result.then(function (newPoll) {
          $scope.polldata = newPoll; //this item return to/through resolve
          console.log("newpoll", newPoll);
        }, function () {
          console.info('Modal dismissed at: ' + new Date());
        });
    };
  });
