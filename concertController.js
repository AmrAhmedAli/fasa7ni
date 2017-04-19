angular.module('ConcertCtrl',[]).controller('concertController',function($scope,$http){
console.log("hh");
  $http({
          method:'GET',
          url: '/concerts',
        }).then(function(data){
          $scope.concerts=data.data;
  console.log($scope.concerts);
        });

});
