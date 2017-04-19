angular.module('UserCtrl',[]).controller('userController',function($scope,$http){
console.log("hh");
  $http({
          method:'GET',
          url: '/SpecialOffers',
        }).then(function(data){
          $scope.protocolList=data.data;
  console.log($scope.protocolList);
        });

});

angular.module('SearchCtrl',[]).controller('searchController',function($scope,$http){

  $http({
          method:'GET',
          url: '/Search',
        }).then(function(data){
          $scope.protocolList=data.data;

        });

});
