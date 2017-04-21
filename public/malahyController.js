angular.module('MalahyCtrl',[]).controller('malahyController',function($scope,$http){
console.log("hh");
  $http({
          method:'GET',
          url: '/malahy',
        }).then(function(data){
          $scope.concerts=data.data;
  console.log($scope.concerts);
        });

});
