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
  .controller('MainCtrl', function ($scope, $http, Auth) {  //$location, 
    $scope.polls=[];
    $scope.error=null;

    //$scope.getCurrentUser = Auth.getCurrentUser;
    $scope.loggedIn = Auth.isLoggedIn;

    $http.get('/api/votes/' )
    .success(function(data){
        $scope.polls=data;
    })
    .error(function(data, status) {
        $scope.error=status;
    })

  });
