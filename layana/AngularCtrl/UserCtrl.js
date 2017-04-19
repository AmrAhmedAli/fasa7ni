angular.module('AM', []).controller('test', function($scope, $http,$location){
$http({
	method: 'GET',
	 url: '/booking',
	 }).then(function(data) { 
	$scope.myBookings= data.data;
	console.log($scope.myBookings);
	
    
});
});
