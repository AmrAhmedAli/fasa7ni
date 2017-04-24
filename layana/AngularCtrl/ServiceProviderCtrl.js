angular.module('spCtrl',[]).controller('spController',function($scope,$http){

  $http({
          method:'GET',
          url: '/Bookings',
        }).then(function(data){
          $scope.bookings=data.data;

        });

});

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

angular.module('SC',[]).controller('serviceprovidercontroller', function($http,$location,$scope){
var app =this;
var error;
	this.addBusiness = function(regData){
	app.error = false;
	console.log(regData.name);
	console.log(regData.location);
	console.log(regData.category);
	console.log(regData.emails);
	console.log(regData.numbers);
	console.log(regData.ageRequirement);
	console.log(regData.address);
	console.log(regData.openingHours);
	console.log(regData.cancelingPolicy);
	console.log(regData.deadlinetoCancel);
	console.log(regData.cancelingPenalty);
	var fd = $scope.fd;
	regData.fd = fd;


	$.ajax({
	method: 'POST',
	 url: '/business',
	data:{"name": regData.name, "location": regData.location, "category":regData.category, "emails":regData.emails, "numbers":regData.numbers, "ageRequirement":regData.ageRequirement,"address": regData.ageRequirement, "openingHours":regData.openingHours , "cancelingPolicy":regData.cancelingPolicy , "deadlinetoCancel":regData.deadlinetoCancel , "cancelingPenalty":regData.cancelingPenalty }
	 });

			};

$scope.uploadFile = function(files) {
    var fd = new FormData();
    //Take the first selected file
    fd.append("file", files[0]);
	$scope.fd = fd;

};

});
angular.module('AC',[]).controller('serviceprovidercontroller1', function($http,$location,$scope){

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
	console.log(reply);
	console.log(id);



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
/*$http({
    method:'POST',
    url:'/offers',
}).then(function(data){

$scope.place=res.data;
console.log($scope.place);

});*/
var app = this;
this.post=function(data1){
	console.log(data1.name);
   

  $.ajax({
	method: 'POST',
	 url: '/offers',
	data: {"businessName": data1.name, "category":data1.category, "validTill":data1.validtill, "description":data1.description}
	 }).done(function(response){

	 	$scope.succ=response.data;
	 });
}

});

angular.module('cinema',[]).controller('addCinema', function($http,$location,$scope){
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
	}
});

angular.module('concert',[]).controller('addConcert', function($http,$location,$scope){
	this.updateConcert = function(regData){
		$http({
		method: 'POST',
		url: '/updateCat/concerts',
		data:{"eventName": regData.eventName, 
			  "timeSlot": regData.timeSlot, 
			  "eventDate" : regData.eventDate,  
			  "price" : regData.price}
		});
	}
});

angular.module('escapeRoom',[]).controller('addEscapeRoom', function($http,$location,$scope){
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
	}
});

angular.module('fight',[]).controller('addFight', function($http,$location,$scope){
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
	}
});

angular.module('kora',[]).controller('addKora', function($http,$location,$scope){
	this.updateKora = function(regData){
		console.log(regData.name);
		$http({
		method: 'POST',
		url: '/updateCat/kora',
		data:{"fieldName": regData.name, 
			  "fieldAVSlots": regData.availableSlots, 
			  "price" : regData.price}
		});
	}
});

angular.module('malahy',[]).controller('addMalahy', function($http,$location,$scope){
	this.updateMalahy = function(regData){
		$http({
		method: 'POST',
		url: '/updateCat/malahy',
		data:{"ticketType": regData.ticketsType, 
			  "ticketGamesTS": regData.availableSlots,
			  "ticketPrice" : regData.price,
			  "malahyType" : regData.type}
		});
	}
});

angular.module('race',[]).controller('addRace', function($http,$location,$scope){
	this.updateRace = function(regData){
		$http({
		method: 'POST',
		url: '/updateCat/race',
		data:{"maxNumberOfCarts": regData.maxNumberOfCarts, 
			  "availableSlots": regData.availableSlots, 
			  "minNumberOfPeople" : regData.minNumberOfPeople,
			  "price" : regData.price}
		});
	}
});

angular.module('theatre',[]).controller('addTheatre', function($http,$location,$scope){
	this.updateTheatre = function(regData){
		$http({
		method: 'POST',
		url: '/updateCat/theatre',
		data:{"hallName": regData.name, 
			  "hallSeatsTS": regData.seats, 
			  "hallShows" : regData.shows,
			  "hallTSTS" : regData.timeSlots,
			  "Price": regData.price}
		});
	}
});

angular.module('trampoline',[]).controller('addTrampoline', function($http,$location,$scope){
	this.updateTrampoline = function(regData){
		$http({
		method: 'POST',
		url: '/updateCat/trampolines',
		data:{"timeSlots": regData.timeSlots, 
			  "price": regData.price}
		});
	}
});












