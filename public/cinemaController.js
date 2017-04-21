angular.module('CinemaCtrl',[]).controller('cinemaController',function($scope,$http){
console.log("hh");
  $http({
          method:'GET',
          url: '/cinemas',
        }).then(function(data){
          $scope.concerts=data.data;
  console.log($scope.concerts);
        });

});
