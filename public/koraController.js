angular.module('KoraCtrl',[]).controller('koraController',function($scope,$http){
console.log("hh");
  $http({
          method:'GET',
          url: '/kora',
        }).then(function(data){
          $scope.concerts=data.data;
  console.log($scope.concerts);
        });

});
