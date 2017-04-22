angular.module('spCtrl',[]).controller('spController',function($scope,$http){

  $http({
          method:'GET',
          url: '/Bookings',
        }).then(function(data){
          $scope.bookings=data.data;

        });

});
