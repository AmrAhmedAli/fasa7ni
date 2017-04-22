angular.module('viewCIN',['AppRoutes']).controller('viewCINController',function($scope,$http){
$http({
    method:'GET',
    url:'/cinemas',
}).then(function(data){
console.log('rana');
$scope.place=data.data;
console.log($scope.place);

});
});


//concerts
angular.module('viewCONC',['AppRoutes']).controller('viewCONCController',function($scope,$http){
$http({
    method:'GET',
    url:'/concerts',
}).then(function(data){

$scope.place=data.data;
console.log($scope.place);

});
});


//escaperooms
angular.module('viewER',['AppRoutes']).controller('viewERController',function($scope,$http){
/*var app = this;
this.viewp = function(bname){
  console.log("hna");
  console.log(bname);*/
$http({
    method:'GET',
    url:'/escaperooms',
}).then(function(data){

$scope.place=data.data;
console.log($scope.place);

});
});


//fight
angular.module('viewF',['AppRoutes']).controller('viewFController',function($scope,$http){
$http({
    method:'GET',
    url:'/fight',
}).then(function(data){

$scope.place=data.data;
console.log($scope.place);

});
});

//kora
angular.module('viewK',['AppRoutes']).controller('viewKController',function($scope,$http){
$http({
    method:'GET',
    url:'/kora',
}).then(function(data){

$scope.place=data.data;
console.log($scope.place);

});
});

//malahy
angular.module('viewM',['AppRoutes']).controller('viewMController',function($scope,$http){
$http({
    method:'GET',
    url:'/malahy',
}).then(function(data){

$scope.place=data.data;
console.log($scope.place);

});
});

//race
angular.module('viewR',['AppRoutes']).controller('viewRController',function($scope,$http){
$http({
    method:'GET',
    url:'/race',
}).then(function(data){

$scope.place=data.data;
console.log($scope.place);

});
});

//theatre
angular.module('viewTH',['AppRoutes']).controller('viewTHController',function($scope,$http){
$http({
    method:'GET',
    url:'/theatre',
}).then(function(data){

$scope.place=data.data;
console.log($scope.place);

});
});

//trampoline
angular.module('viewTR',['AppRoutes']).controller('viewTRController',function($scope,$http){
$http({
    method:'GET',
    url:'/trampolines',
}).then(function(data){

$scope.place=data.data;
console.log($scope.place);

});
});
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
          method:'POST',
          url: '/search',
        }).then(function(data){
          $scope.results=data.data;
          console.log($scope.results);

        });

});
