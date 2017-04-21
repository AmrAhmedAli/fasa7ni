angular.module('EscapeRoomCtrl',[]).controller('escapeRoomController',function($scope,$http){
console.log("hh");
  $http({
          method:'GET',
          url: '/escaperooms',
        }).then(function(data){
          $scope.concerts=data.data;
  console.log($scope.concerts);
        });

});
