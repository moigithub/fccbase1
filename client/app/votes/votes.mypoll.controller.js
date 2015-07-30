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
  .controller('mypollVotesCtrl', function ($scope, $http, Auth) {  //$location, 
    $scope.polls=[];
    $scope.error=null;

    $scope.getCurrentUser = Auth.getCurrentUser();


   	$http.get('/api/votes/uid/' + $scope.getCurrentUser._id )
    .success(function(data){
        $scope.polls=data;
        console.log(data);
    })
    .error(function(data, status) {
        $scope.error=status;
    })


    $scope.delete = function(pollId){
        $http.delete('/api/votes/' + pollId);
        // redirect to /votes/mypoll to refresh the list ???
    }

  });