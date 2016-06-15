angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, Auth) {
  $scope.data = {};
  Links.getAll().then(function(links){
    $scope.data.links = links;
  })
  .catch(function(err){
    console.error(err);
  });
  $scope.signout = Auth.signout;
});
