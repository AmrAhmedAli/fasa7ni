angular.module('TM', [])
.controller('appController', function($scope, $http,$location,$route){
 
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




