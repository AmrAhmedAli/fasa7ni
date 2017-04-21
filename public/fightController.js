angular.module('FightCtrl',[]).controller('fightController',function($scope,$http){
console.log("hh");
  $http({
          method:'GET',
          url: '/fight',
        }).then(function(data){
          $scope.concerts=data.data;
  console.log($scope.concerts);
        });

});
