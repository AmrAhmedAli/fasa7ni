
angular.module('filter',['AppRoutes']).controller('addFilter', function($http,$location,$scope){
	this.addFilter = function(regData){
		$http({
		method: 'POST',
		url: '/addFilter',
		data:{"name": regData.name, 
			  "field": regData.field}
		});
	}
});

  angular.module('TM',['AppRoutes']).controller('appController',function($route,$scope,$http){
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





}
 
});


  angular.module('TMP',['AppRoutes']).controller('ad_rejcontroller',function($route,$scope,$http){
  $http({
	method: 'GET',
	 url: '/businessreq',
	 }).then(function(data) { 
	$scope.protocolList= data.data;
	console.log($scope.protocolList);
	
    
});

$scope.delsubmit = function(data) {

var userId = data;
	console.log(userId);
  	$.ajax({
  		method:"POST",
  		url:"/deleteReq",
  		data:{"userId": userId},
		success: function(result){
			$route.reload();
  		}
  	})
       
      };

$scope.addsubmit = function(data) {

var userId = data.requesterMail;
var bId = data.businessName;
var category = data.category;
var card = data.cardNumber;
var holder = data.holderName;
var cvv = data.cvv;
var date = data.validdate;
var description = data.description;
var password = data.password;

  	$.ajax({
			method:"POST",
			url:"/addReq",
			data:{"userId": userId,"bId": bId, "category": category, "card": card, "holder": holder, "cvv": cvv, "date": date, "description": description, "password": password},
			success: function(result){
				
					$route.reload();
				
			}
		})
       
      };
});
