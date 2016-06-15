angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, Auth) {
  $scope.link ={};
  $scope.addLink = function(){
    Links.addOne($scope.link);
    // Redirection: Set the location path to links
    $location.path('/links');
  };
  $scope.signout = Auth.signout;
});
