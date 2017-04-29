
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


angular.module('countCTRL',['AppRoutes']).controller('countController',function($scope,$http){

$http({
            method:'GET',
            url:'/countUsers',
          }).then(function(data){
            console.log("hello");
          $scope.users=data.data;
		});


});
