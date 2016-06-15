angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, Auth) {
  $scope.link ={};
  $scope.addLink = function(){
    $scope.loading = true;
    Links.addOne($scope.link).then(function(){
      $scope.loading = false;
      // Redirection: Set the location path to links
      $location.path('/links');
    })
    .catch(function(err){
      console.log(err);
    });
  };
  $scope.signout = Auth.signout;
});
