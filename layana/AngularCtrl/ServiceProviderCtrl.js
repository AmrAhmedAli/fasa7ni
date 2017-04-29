angular.module('spCtrl',[]).controller('spController',function($scope,$http){
//Service provider controller module for getting the bookings from the backend database
  $http({
          method:'GET',
	  //Backend route
          url: '/Bookings',
        }).then(function(data){
	  //return bookings as an array in the scope
          $scope.bookings=data.data;

        });

});

//as a service provider i can update my business profile info 
// the function is called when the signed in service provider chooses update my busines info button
angular.module('business',[]).controller('serviceprovidercontroller', function($http,$location,$scope){
$http({
	method: 'GET',
	 url: '/viewBusinessProfile'
	 }).then(function(data) { 
	$scope.businessInfo = data.data;
	$scope.name = data.data.name;
	$scope.location = data.data.location;
	$scope.number = data.data.number;
	$scope.ageRequirement = data.data.ageRequirement;
	$scope.address = data.data.address;
	$scope.openingHours = data.data.openingHours;
	$scope.cancelingPolicy = data.data.cancelingPolicy;
	$scope.deadlinetoCancel = data.data.deadlinetoCancel;
	$scope.cancelingPenalty = data.data.cancelingPenalty;
	console.log($scope.businessInfo);    
});
	 
	 var app =this;
	this.updateBusiness = function(regData){
	app.error = false;
	if(regData.name == null || regData.name == ''){
		regData.name = $scope.name
	}
	if(regData.location == null || regData.location == ''){
		regData.location = $scope.location
	}
	if(regData.number == null || regData.number == ''){
		regData.number = $scope.number
	}
	if(regData.ageRequirement == null || regData.ageRequirement == ''){
		regData.ageRequirement = $scope.ageRequirement
	}
	if(regData.address == null || regData.address == ''){
		regData.address = $scope.address
	}
	if(regData.openingHours == null || regData.openingHours == ''){
		regData.openingHours = $scope.openingHours
	}
	if(regData.cancelingPolicy == null || regData.cancelingPolicy == ''){
		regData.cancelingPolicy = $scope.cancelingPolicy
	}
	if(regData.deadlinetoCancel == null || regData.deadlinetoCancel == ''){
		regData.deadlinetoCancel = $scope.deadlinetoCancel
	}
	if(regData.cancelingPenalty == null || regData.cancelingPenalty == ''){
		regData.cancelingPenalty = $scope.cancelingPenalty
	}
	
	$http({
	method: 'POST',
	 url: '/updateBusiness',
	data:{"name": regData.name, 
		  "location": regData.location, 
		  "number" : regData.number, 
		  "ageRequirement" : regData.ageRequirement, 
		  "address" : regData.address, 
		  "openingHours" : regData.openingHours, 
		  "cancelingPolicy" : regData.cancelingPolicy, 
		  "deadlinetoCancel" : regData.deadlinetoCancel, 
		  "cancelingPenalty" : regData.cancelingPenalty}
	});
	};
});
//This module is made for the service provider adding details for his/her business when he/she clicks add business button in the service provider panel page
angular.module('SC',[]).controller('serviceprovidercontroller2', function($http,$location,$scope){
var app =this;
//First i am getting the data of the service provider, So that i am restericting the service provider from adding business name or category different from the submitted business of the service provider
$http({
	method: 'GET',
	 url: '/viewServiceP'
	 }).then(function(data) { 

	$scope.SPcategory = data.data.category;
	$scope.SPbusiness = data.data.businessName;
	//Those scopes are now ready to be used in the html. 
	   
});

var error;
	//This method is called when the service provider clicks add business button
	this.addBusiness = function(regData,Bus,Cat){
	app.error = false;
	regData.category = Cat;
	regData.name = Bus;
	var fd = $scope.fd;
	regData.fd = fd;
	app.errMSG = false;
	app.SuccessMSG = false;

	//I am posting the details entered in the front end into the backend function in order to add business
	$http.post('/business',regData).then(function(amm){console.log(amm);if(amm.data.success){app.SuccessMSG = amm.data.message /*Here if the form submitted correctly i will be displaying the appropriate message handled by the backend*/}else{app.errMSG = amm.data.message /*Here if the form was not submitted i will be displaying the appropriate message handled by the backend*/}});
	/*data:{"name": regData.name, "location": regData.location, "category":regData.category, "emails":regData.emails, "numbers":regData.numbers, "ageRequirement":regData.ageRequirement,"address": regData.ageRequirement, "openingHours":regData.openingHours , "cancelingPolicy":regData.cancelingPolicy , "deadlinetoCancel":regData.deadlinetoCancel , "cancelingPenalty":regData.cancelingPenalty }
	 });*/

			};

$scope.uploadFile = function(files) {
    var fd = new FormData();
    //Take the first selected file
    fd.append("file", files[0]);
	$scope.fd = fd;

};

});
//views all replies for business and adds reply for the ones needed
angular.module('AC',[]).controller('serviceprovidercontroller1', function($http,$location,$scope,$route){

$scope.reply="";

$http({
	method: 'GET',
	 url: '/viewSreviews'
	 }).then(function(data) { 
	$scope.myInfo = data.data;
	$scope.nameOfUser = data.data.nameOfUser;
	$scope.date = data.data.date;
	$scope.title = data.data.title;
	$scope.body = data.data.body;
	$scope.reply = data.data.reply;
	console.log($scope.myInfo);    
});
	 
	 
	this.addReply = function(reply,id){


	$.ajax({
	method: 'POST',
	url: '/serviceProvider',
	data:{'reply' : reply,'id': id}
	
	 });
	 	$route.reload();
		}
	

			});

//cinemas
angular.module('PostOffer',['AppRoutes']).controller('PostOfferController',function($scope,$http){
$http({
	method: 'GET',
	 url: '/viewServiceP'
	 }).then(function(data) { 

	$scope.SPcategory = data.data.category;
	$scope.SPbusiness = data.data.businessName;
	   
});

var app = this;
app.errMSG = false;
app.SuccessMSG = false;
this.post=function(data1,data2,data3){
data1.businessName = data2;
data1.category = data3;
console.log(data1);
//console.log(data3);

	
   

  $http.post('/offers',data1).then(function(response){

	 	if(response.data.success){app.SuccessMSG = response.data.message}else{app.errMSG = response.data.message}
	 });
}

});

angular.module('SPHP',[]).controller('SPhomepagecontroller', function($http,$location,$scope){
$http({
	method: 'GET',
	 url: '/viewServiceP'
	 }).then(function(data) { 

	$scope.SPcategory = data.data.category;
	$scope.SPbusiness = data.data.businessName;
	   
});

});

angular.module('cinema',[]).controller('addCinema', function($http,$route,$location,$scope){
	this.updateCinema = function(regData){
		$http({
		method: 'POST',
		url: '/updateCat/cinemas',
		data:{"screenName": regData.name, 
			  "screenMovie": regData.movies, 
			  "screenSeats" : regData.seats, 
			  "screenTimeSlot" : regData.timeSlots, 
			  "price" : regData.price}
		});
		$route.reload();
	}
});

angular.module('concert',[]).controller('addConcert', function($http,$route,$location,$scope){
	this.updateConcert = function(regData){
		$http({
		method: 'POST',
		url: '/updateCat/concerts',
		data:{"eventName": regData.eventName, 
			  "timeSlot": regData.timeSlot, 
			  "eventDate" : regData.eventDate,  
			  "price" : regData.price}
		});
	$route.reload();
	}
});

angular.module('escapeRoom',[]).controller('addEscapeRoom', function($http,$route,$location,$scope){
	this.updateEscapeRoom = function(regData){
		$http({
		method: 'POST',
		url: '/updateCat/escapeRooms',
		data:{"roomName": regData.name, 
			  "roomPrice": regData.price, 
			  "roomTS" : regData.timeSlots,  
			  "roomMinAge" : regData.minAge,
			  "roomMinteam" : regData.minAgeNumber,
			  "roomMaxTeam" : regData.maxTeamNumber}
		});
		$route.reload();
	}
});

angular.module('fight',[]).controller('addFight', function($http,$route,$location,$scope){
	this.updateFight = function(regData){
		$http({
		method: 'POST',
		url: '/updateCat/fight',
		data:{"gameName": regData.name, 
			  "gameFieldTS": regData.fields, 
			  "gamePrice" : regData.price,  
			  "gameMinAge" : regData.minAge,
			  "gameMinteam" : regData.teamMinNumber,
			  "gameMaxTeam" : regData.teammaxNumber,
			  "gameTS" : regData.timeSlots}
		});
		$route.reload();
	}
});

angular.module('kora',[]).controller('addKora', function($http,$route,$location,$scope){
	this.updateKora = function(regData){
		console.log(regData.name);
		$http({
		method: 'POST',
		url: '/updateCat/kora',
		data:{"fieldName": regData.name, 
			  "fieldAVSlots": regData.availableSlots, 
			  "price" : regData.price}
		});
		$route.reload();
	}
});

angular.module('malahy',[]).controller('addMalahy', function($http,$route,$location,$scope){
	this.updateMalahy = function(regData){
		$http({
		method: 'POST',
		url: '/updateCat/malahy',
		data:{"ticketType": regData.ticketsType, 
			  "ticketGamesTS": regData.availableSlots,
			  "ticketPrice" : regData.price,
			  "malahyType" : regData.type}
		});
		$route.reload();
	}
});

angular.module('race',[]).controller('addRace', function($http,$route,$location,$scope){
	this.updateRace = function(regData){
		$http({
		method: 'POST',
		url: '/updateCat/race',
		data:{"maxNumberOfCarts": regData.maxNumberOfCarts, 
			  "availableSlots": regData.availableSlots, 
			  "minNumberOfPeople" : regData.minNumberOfPeople,
			  "price" : regData.price}
		});
		$route.reload();
	}
});

angular.module('theatre',[]).controller('addTheatre', function($http,$route,$location,$scope){
	this.updateTheatre = function(regData){
		console.log(regData.hallName+"amr bymassy");
		$http({
		method: 'POST',
		url: '/updateCat/theatre',
		data:{"hallName": regData.hallName, 
			  "hallSeatsTS": regData.hallSeatsTS, 
			  "hallShows" : regData.hallShows,
			  "hallTSTS" : regData.hallTSTS,
			  "Price": regData.price}
		});
		$route.reload();
	}
});

angular.module('trampoline',[]).controller('addTrampoline', function($http,$route,$location,$scope){
	this.updateTrampoline = function(regData){
		$http({
		method: 'POST',
		url: '/updateCat/trampolines',
		data:{"timeSlots": regData.timeSlots, 
			  "price": regData.price}
		});
		$route.reload();
	}
});












