angular.module('TrampolineCtrl',[]).controller('trampolineController',function($scope,$http){
console.log("hh");
  $http({
          method:'GET',
          url: '/trampoline',
        }).then(function(data){
          $scope.concerts=data.data;
  console.log($scope.concerts);
        });

});
