
angular.module('filter',['AppRoutes']).controller('addFilter', function($http,$location,$scope){
	// as an admin i can add a new search filter
	// the function is called when add filter button is chosen by the admin
	this.addFilter = function(regData){
		$http({
		method: 'POST',
		url: '/addFilter',
		data:{"name": regData.name, 
			  "field": regData.field}
		});
	}
});

 angular.module('TM',['AppRoutes']).controller('appController',function($scope,$http,$route,$location){
   $scope.rett = false;
$http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
    $http({
            method:'GET',
            url:'/getusrs',
          }).then(function(data){
            console.log("hello");
          $scope.usrs=data.data;

          console.log($scope.usrs);
		});
	
  
  $scope.findusr = function(data) {
    var userId = data;
    console.log(userId);
   $http({
        url: '/SearchUser',
        method: "POST",
        data: { 'Uid' : userId },
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    }) .then(function (response) {
      console.log("amr bymassy");
    $scope.retusr = response.data[0];
       $scope.retbooks = response.data[1];
       console.log(response.data);
       $scope.rett = true;
       // $location.path('/finalusrs'); 
})
  }
//blocks user using blockusr function and posts update
$scope.blockusr = function(data) {
    var userId = data;
   $http({
        url: '/blockusr',
        method: "POST",
        data: { 'Uid' : userId },
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
   
   })
    $route.reload();

}
//unblockes usre by calling unblockusr function and posts update
$scope.Unblockusr = function(data) {
    var userId = data;
   $http({
        url: '/unblockusr',
        method: "POST",
        data: { 'Uid' : userId },
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
   
   })
    $route.reload();

}



});
//This module is mainly made for business Requests handeling by the admin
  angular.module('TMP',['AppRoutes']).controller('ad_rejcontroller',function($route,$scope,$http){
//Here i am getting the data of the business requests from request table from the backend
  $http({
	method: 'GET',
	 url: '/businessreq',
	 }).then(function(data) { 
	$scope.protocolList= data.data;
	  //This scope now contains the data of the business requests. now i can use it in the front end html
	console.log($scope.protocolList);
	
    
});
//This function is called when the admin press reject business request
$scope.delsubmit = function(data) {
//I am getting only the Id of the request that is canceled from the front end and i am passing it to the function in the backend
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
//This function is called when the admin press accept business request
$scope.addsubmit = function(data) {
//I am getting all the details of the request 
var userId = data.requesterMail;
var bId = data.businessName;
var category = data.category;
var card = data.cardNumber;
var holder = data.holderName;
var cvv = data.cvv;
var date = data.validdate;
var description = data.description;
var password = data.password;
// I am sending all those details to the backend function in order to add the request to be serviceprovider and add a category by the submitted category in the request
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


angular.module('countCTRL',['AppRoutes']).controller('countController',function($scope,$http){

$http({
            method:'GET',
            url:'/countUsers',
          }).then(function(data){
            console.log("hello");
          $scope.users=data.data;
		});


});
