  angular.module('TM',['AppRoutes']).controller('appController',function($scope,$http){
console.log('here');
    $http({
            method:'GET',
            url:'/getusrs',
          }).then(function(data){
            console.log("hello");
          $scope.usrs=data.data;
          console.log($scope.usrs);
		});



$http({
            method:'GET',
            url:'/SearchUser',
			data:{"Uid":userId}
          }).then(function(data){
            console.log("hello");
          $scope.usrs=data.data;
          console.log($scope.usrs);
          });


	$scope.findusr = function(data) {

var userId = data;


$http({
            method:'GET',
            url:'/SearchUser',
			data:{"Uid":userId}
          }).then(function(data){
            console.log("amr bymassy");
          $scope.ayaga=data.data;
          console.log($scope.ayaga);
          });




/*
var userId = data;
	console.log(userId);
  	$.ajax({
  		method:"POST",
  		url:"/SearchUser",
  		data:{"Uid": userId},
		success: function(result){
			console.log("amr bymassy");
  		}
  	}).then(function(data){
		 $scope.userbooks = data;
	  })


};*/
}});
