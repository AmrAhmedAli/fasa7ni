angular.module('TheatreCtrl',[]).controller('theatreController',function($scope,$http){
console.log("hh");
  $http({
          method:'GET',
          url: '/theatre',
        }).then(function(data){
          $scope.concerts=data.data;
  console.log($scope.concerts);
        });

});
