angular.module('RaceCtrl',[]).controller('raceController',function($scope,$http){
console.log("hh");
  $http({
          method:'GET',
          url: '/race',
        }).then(function(data){
          $scope.concerts=data.data;
  console.log($scope.concerts);
        });

});
