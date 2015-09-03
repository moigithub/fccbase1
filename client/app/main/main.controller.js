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
  .controller('MainCtrl', MainCtrl);

MainCtrl.$inject=['$scope', '$modal', '$http', 'Auth', '$location', '$anchorScroll'];
function MainCtrl($scope, $modal, $http, Auth, $location, $anchorScroll) {  
    $scope.pageTitle="All Polls";
    $scope.polls=[];
    $scope.error=null;

    //$scope.getCurrentUser = Auth.getCurrentUser;
    $scope.loggedIn = Auth.isLoggedIn;

    $http.get('/api/votes/' )
    .success(function(data){
        $scope.polls=data;

        var dataPath=$location.search();
console.log(dataPath);
        // check if need to scroll (user wants to check x poll )
        $location.hash(dataPath["id"]);
        // call $anchorScroll()
        $anchorScroll();
    })
    .error(function(data, status) {
        $scope.error=status;
    });

    // check which page i am
    $scope.isPage =function(page) {
      return page === $scope.pageTitle;
    };

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

    // empty function, not modify, placeholder when not log in, should do nothing
    // should never happen but.. whatever
    $scope.delete = function(poll){};
  }
