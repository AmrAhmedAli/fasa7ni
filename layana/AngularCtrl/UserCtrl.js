angular.module('viewCIN',['AppRoutes']).controller('viewCINController',function($scope,$http){
$http({
    method:'GET',
    url:'/cinemas',
}).then(function(data){
$scope.place=data.data;


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

$http({
    method:'GET',
    url:'/escaperooms',
}).then(function(data){

$scope.place=data.data;


});
});


//fight
angular.module('viewF',['AppRoutes']).controller('viewFController',function($scope,$http){
$http({
    method:'GET',
    url:'/fights',
}).then(function(data){

$scope.place=data.data;


});
});

//kora
angular.module('viewK',['AppRoutes']).controller('viewKController',function($scope,$http){
$http({
    method:'GET',
    url:'/kora',
}).then(function(data){

$scope.place=data.data;


});
});

//malahy
angular.module('viewM',['AppRoutes']).controller('viewMController',function($scope,$http){
$http({
    method:'GET',
    url:'/malahy',
}).then(function(data){

$scope.place=data.data;


});
});

//race
angular.module('viewR',['AppRoutes']).controller('viewRController',function($scope,$http){
$http({
    method:'GET',
    url:'/races',
}).then(function(data){

$scope.place=data.data;


});
});

//theatre
angular.module('viewTH',['AppRoutes']).controller('viewTHController',function($scope,$http){
$http({
    method:'GET',
    url:'/theatres',
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
//Angular controller to handle the special offers
angular.module('UserCtrl',[]).controller('userController',function($scope,$http){

  $http({
          method:'GET',
	  //special offers backend route
          url: '/SpecialOffers',
        }).then(function(data){
	  //return the special offers in an array called protocolList in the scope
          $scope.protocolList=data.data;
  
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

angular.module('SignInCtrl',['AppRoutes']).controller('signinController', function($rootScope, $scope, $location, $http) {

		$rootScope.isLoggedIn=false; //set isLogged in to false - this variable is used to hide or sign in message
		$scope.showMessage=false; // set error message to false
		$scope.sendFormUser =function(form){ //send form as a user

				var email=$scope.email; //get email
				var password=$scope.password; //get password

				$http({
					method: 'POST', // send POST request
					url: '/signinUser', //backend route for sign in user
					data: {'name': name, 'email':email, 'password':password},// send data
					headers: {'Content-Type': 'application/x-www-form-urlencoded'}
				}).then(function(response){
					var message=response.data; //get message for response 
					if(message ==='Success'){ 
						$rootScope.isLoggedIn=true; // set isLoggedin to true to hhide sign in button and sign up button
						$rootScope.isUser=true; // verify he is a user to show view profile button
						$location.url('/'); // redurect to index
					}
					else {
						$scope.showMessage=true; //show message div
						$scope.errorMessage=response.data; // set errormessage to error data

					}});
		};
    $rootScope.isLoggedIn=false;
	$rootScope.isUser=false;
		$scope.showMessage=false;
		$scope.sendFormServiceP =function(form){ //send form as sP .. the code is basically the same as user

				var email=$scope.email;
				var password=$scope.password;

				$http({
					method: 'POST',
					url: '/signinProvider',
					data: {'name': name, 'email':email, 'password':password},
					headers: {'Content-Type': 'application/x-www-form-urlencoded'}
				}).then(function(response){
					var message=response.data;
					if(message ==='Success'){
						$rootScope.isLoggedIn=true;
						$rootScope.isSP=true;
						$location.url('/serviceP');
					}
					else {
						$scope.showMessage=true;
						$scope.errorMessage=response.data;

					}});
		};

    $rootScope.isLoggedIn=false;
	$rootScope.isSP=false;
		$scope.showMessage=false;
		$scope.sendFormAdmin =function(form){ //send for as admin .. code is the same as admin

				var email=$scope.email;
				var password=$scope.password;

				$http({
					method: 'POST',
					url: '/signinAdmin',
					data: {'name': name, 'email':email, 'password':password},
					headers: {'Content-Type': 'application/x-www-form-urlencoded'}
				}).then(function(response){
					var message=response.data;
					if(message ==='Success'){
						$rootScope.isLoggedIn=true;
						$rootScope.isAdmin=true;
						$location.url('/admin');
					}
					else {
						$scope.showMessage=true;
						$scope.errorMessage=response.data;

					}});
		};
    $rootScope.isAdmin=false;

});

angular.module('CinemaReviewsCtrl',[]).controller('cinemaController',function($scope,$http,$route){ //get reviews for cinema

  $http({
          method:'GET',
          url: '/cinemasReviews', //backend route
        }).then(function(data){
          $scope.concerts=data.data;
  
        });

//This function is used if the user clicks add review in the category cinema
$scope.post = function(data,cat){
data.category = cat;
	//I am calling the backend function in order to post the review with the data sent from the html
$http.post('/postreview', data).then(function(response){

$route.reload();


});

};

});
angular.module('ConcertReviewsCtrl',[]).controller('concertController',function($scope,$http,$route){ //handle reviews for concerts

  $http({
          method:'GET',
          url: '/concertsReviews',
        }).then(function(data){
          $scope.concerts=data.data;
  
        });
//This function is used if the user clicks add review in the category Concert
$scope.post = function(data,cat){
data.category = cat;
	//I am calling the backend function in order to post the review with the data sent from the html
$http.post('/postreview', data).then(function(response){

$route.reload();


});

};


});
angular.module('EscapeRoomReviewsCtrl',[]).controller('escapeRoomController',function($scope,$http,$route){
	//handle reviews for escaperooms

  $http({
          method:'GET',
          url: '/escaperoomsReviews',
        }).then(function(data){
          $scope.concerts=data.data;
  
        });
//This function is used if the user clicks add review in the category EscapeRoom
	
$scope.post = function(data,cat){
data.category = cat;
	//I am calling the backend function in order to post the review with the data sent from the html
$http.post('/postreview', data).then(function(response){

$route.reload();


});

};


});
angular.module('FightReviewsCtrl',[]).controller('fightController',function($scope,$http,$route){
//handle reviews for fight
  $http({
          method:'GET',
          url: '/fightReviews',
        }).then(function(data){
          $scope.concerts=data.data;
  
        });
//This function is used if the user clicks add review in the category Fight
$scope.post = function(data,cat){
data.category = cat;
	//I am calling the backend function in order to post the review with the data sent from the html
$http.post('/postreview', data).then(function(response){

$route.reload();


});

};


});
angular.module('KoraReviewsCtrl',[]).controller('koraController',function($scope,$http,$route){
//handle review for kora
  $http({
          method:'GET',
          url: '/koraReviews',
        }).then(function(data){
          $scope.concerts=data.data;
  
        });
//This function is used if the user clicks add review in the category Kora
$scope.post = function(data,cat){
data.category = cat;
	//I am calling the backend function in order to post the review with the data sent from the html
$http.post('/postreview', data).then(function(response){

$route.reload();


});

};


});
angular.module('MalahyReviewsCtrl',[]).controller('malahyController',function($scope,$http,$route){
//handle reviews for malahy
  $http({
          method:'GET',
          url: '/malahyReviews',
        }).then(function(data){
          $scope.concerts=data.data;
  
        });
//This function is used if the user clicks add review in the category Mlahy
$scope.post = function(data,cat){
data.category = cat;
	//I am calling the backend function in order to post the review with the data sent from the html
$http.post('/postreview', data).then(function(response){

$route.reload();


});

};


});
angular.module('RaceReviewsCtrl',[]).controller('raceController',function($scope,$http,$route){
//handle review for race
  $http({
          method:'GET',
          url: '/raceReviews',
        }).then(function(data){
          $scope.concerts=data.data;
 
        });
//This function is used if the user clicks add review in the category Race
$scope.post = function(data,cat){
data.category = cat;
	//I am calling the backend function in order to post the review with the data sent from the html
$http.post('/postreview', data).then(function(response){

$route.reload();


});

};


});
angular.module('TheatreReviewsCtrl',[]).controller('theatreController',function($scope,$http,$route){
//handle review for theatre
  $http({
          method:'GET',
          url: '/theatreReviews',
        }).then(function(data){
          $scope.concerts=data.data;
  
        });
//This function is used if the user clicks add review in the category Theatre
$scope.post = function(data,cat){
data.category = cat;
	//I am calling the backend function in order to post the review with the data sent from the html
$http.post('/postreview', data).then(function(response){

$route.reload();


});

};


});
angular.module('TrampolineReviewsCtrl',[]).controller('trampolineController',function($scope,$http,$route){
//handle reviews for trampoline
	$http({
          method:'GET',
          url: '/trampolineReviews',
        }).then(function(data){
          $scope.concerts=data.data;
  
        });
//This function is used if the user clicks add review in the category Trampoline
$scope.post = function(data,cat){
data.category = cat;
	//I am calling the backend function in order to post the review with the data sent from the html
$http.post('/postreview', data).then(function(response){

$route.reload();


});

};


});


angular.module('SignUpCtrl',['AppRoutes']).controller('signupController', function($scope, $rootScope, $location, $http) {
	//handle sign up

		$scope.show = false; //show phone field
		$scope.showPhone = function() { // show phone field
				$scope.show = true;
		};
		$scope.hidePhone = function() { //hide phone field
				$scope.show = false;
		};
		$scope.showMessage=false; //show error message

		$scope.sendForm =function(form){
			//send form for sign up
			// set variables

				var name=$scope.name;
				var email=$scope.email;
				var password=$scope.password;
				var confirmedPassword=$scope.confirmedPassword;
				var gender=$scope.gender;
				var homelocation= $scope.homelocation;
				var contact=$scope.contact;
				var phoneNumber=$scope.phoneNumber;

				$http({ //send http request
					method: 'POST',
					url: '/signupUser',
					data: {'name': name, 'email':email, 'password':password, 'confirmedPassword':confirmedPassword, 'gender':gender, 'homelocation':homelocation, 'contact': phoneNumber},
					headers: {'Content-Type': 'application/x-www-form-urlencoded'}
				}).then(function(response){

				  if(response.data==='Success'){  //if message is success
				    $rootScope.isLoggedIn=true; //hide sign up and log in 
				   $location.url('/'); //redirect to main page

				  }

				  else{

				    $scope.showMessage=true; //show error message
				    $scope.errorMessage=response.data //set th sate to recieved error message
				  };

          })


		};


});

angular.module('SignOutCtrl',['AppRoutes']).controller('signoutController', function($rootScope, $location, $http) {
	
		$rootScope.isLoggedIn=false;
   			$http({ //send signout request
		          method:'POST',
		          url: '/signOut',
		        }).then(function(response){
              if(response.data='logout'){
                $rootScope.isLoggedIn=false; //if logged out successfully show sign in and sign up buttons
                $location.url('/'); // redirect to main page

            }
			})

});

angular.module('FilterCtrl',[]).controller('filterController',function($scope,$http){

  $http({
          method:'GET',
          url: '/filters',
        }).then(function(data){
          $scope.filters=data.data;
          console.log($scope.filters);

        });
//When the Visitor presses add business request and fill the form this function is called
var app =this;
this.addBusinessReq = function(regData){
	app.errMSG = false;
	app.SuccessMSG = false;
	console.log(regData);
	//I am posting all of the entered data in the front end, and i am sending it to the backend function
	$http.post('/businessreq',regData).then(function(amm){console.log(amm);if(amm.data.success){app.SuccessMSG = amm.data.message /*If succeded appropriate message is displayed, this message is handled by the backend*/}else{app.errMSG = amm.data.message /*If Not succeded appropriate message is displayed, this message is handled by the backend*/}});	
	/*data:{"requesterMail": regData.requesterMail, "password": regData.password, "businessName":regData.businessName, "category":regData.category, "cardNumber":regData.cardNumber, "cvv":regData.cvv,"validdate": regData.validdate, "description":regData.description }
	 })*/


}});

angular.module('user', []).controller('UPD', function($scope, $http,$location){
console.log("hnaaa");

	// as a user i can update my profile info
	// this function is called when a signed in user chooses update my profile button
$http({
	method: 'GET',
	 url: '/viewMyprofile'
	 }).then(function(data) { 
	$scope.myInfo = data.data;
	$scope.name = data.data.name;
	$scope.password = data.data.password;
	$scope.gender = data.data.gender;
	$scope.homelocation = data.data.homelocation;
	$scope.contact = data.data.contact;
	console.log($scope.myInfo);    
});
	 
	 var app =this;
	this.updateUser = function(regData){
	app.error = false;
	if(regData.name == null || regData.name == ''){
		regData.name = $scope.name
	}
	if(regData.password == null || regData.password == ''){
		regData.password = $scope.password
	}
	if(regData.gender == null || regData.gender == ''){
		regData.gender = $scope.gender
	}
	if(regData.homelocation == null || regData.homelocation == ''){
		regData.homelocation = $scope.homelocation
	}
	if(regData.contact == null || regData.contact == ''){
		regData.contact = $scope.contact
	}

	$http({
	method: 'POST',
	 url: '/updateUser',
	data:{"name" : regData.name, 
		  "password" : regData.password, 
		  "gender" : regData.gender, 
		  "homelocation" : regData.homelocation, 
		  "contact" : regData.contact}
	 });



			};
});
//This module is made in order to view user signed in Bookings and to cancel if needed
angular.module('AM', []).controller('test', function($scope, $http,$route,$location){
//Iam getting the data from the backend. The backend handles the session of the user in order to retrieve the correct data from table booking histories
$http({
	method: 'GET',
	 url: '/booking',
	 }).then(function(data) { 
	$scope.myBookings= data.data;
	console.log($scope.myBookings);
	//Now That scope will be having the bookings so that i can use it in the html to view all the data inside
	
    
});
//sends the booking to be cacelled id and other intfo to backend and posts update of cancelled booking
$scope.cancelBook = function(id,busname,buscat,catid){
console.log("koko bymasii");

$http({
	method: 'POST',
	url: '/cancelBook',
	data: {"_id":id,"busname":busname,"buscat":buscat,"catid":catid}	
	}).then( function(response){
			$route.reload();
		});

}
})


angular.module('UC',['AppRoutes'])

.controller('BookTrampoline',function($scope,$http,$routeParams){

	$http({
		
			method:'GET',
			url:'../viewTrampolinep/'+$routeParams.bus_name
		  }).then(function(data){
			//console.log(data);
			
		  $scope.tppages=data.data;
		  //console.log($scope.tppages);
		});

		$scope.trampBook = function(data1,data2){
			$http({
    url: "/booknow",
    method: "POST",
    data: {"bookedTimeSlot":data1.TS,"businessName":data2,"Cat":"Trampoline"},
    }).then(function(data){
			console.log(data);
		});
	}

})
.controller('BookMalahy',function($scope,$http,$routeParams){
	$http({
			method:'GET',
			url:'../viewMalahyp/'+$routeParams.bus_name
		  }).then(function(data){
			//console.log(data);
		  $scope.page=data.data;
		  //console.log($scope.page);
		});
		$scope.MalahyBook = function(data1,data2){
		
		$.ajax({
    url: "/booknow",
    method: "POST",
    data: {"numberOfTickets":data1.NumberOfTickets,"BookedticketType":data1.TT,"businessName":data2,"Cat":"Malahy"},
});
	 }

})
.controller('BookConcert',function($scope,$http,$routeParams){
	$http({
			method:'GET',
			url:'../viewConcertp/'+$routeParams.bus_name
		  }).then(function(data){
			//console.log(data);
		  $scope.pagee=data.data;
		  //console.log($scope.pagee);
		});
		 $scope.ConcertBook = function(data1,data2,data3){
		
		$.ajax({
    url: "/booknow",
    method: "POST",
    data: {"bookedTimeSlot":data3,"businessName":data1,"eventName":data2,"Cat":"Concert"},
});
	 }
})
.controller('BookRace',function($scope,$http,$routeParams){
	$http({
			method:'GET',
			url:'../viewRacep/'+$routeParams.bus_name
		  }).then(function(data){
			//console.log(data);
		  $scope.rpages=data.data;
		  //console.log($scope.rpages);
		});
		$scope.raceBook = function(data1,data2){
			$http({
    url: "/booknow",
    method: "POST",
    data: {"bookedTimeSlot":data1.TS,"numberOfPeople":data1.NOP,"businessName":data2,"Cat":"Race"},
    }).then(function(data){
			console.log(data);
		});
	}
})
.controller('BookCinema',function($scope,$http,$routeParams){
		$http({
			method:'GET',
			url:'../viewCinemap/'+$routeParams.bus_name
		  }).then(function(data){
			//console.log(data);
		  $scope.cpages=data.data;
		  console.log($scope.cpages);
		  //console.log($scope.cpages);
		});

				 $scope.CinemaBook = function(data1,data2){
					 console.log(data1 + data2);
		$.ajax({
    url: "/booknow",
    method: "POST",
    data: {"bookedTimeSlot":data1.TS,"name":data2,"bookedSeats":data1.seat,"bookedScreen":data1.scr,"bookedMovie":data1.mov,"Cat":"Cinema"},
	});
		 }

})
.controller('BookEscape',function($scope,$http,$routeParams){
		$http({
			method:'GET',
			url:'../viewEscapep/'+$routeParams.bus_name
		  }).then(function(data){
			//console.log(data);
		  $scope.epages=data.data;
		  //console.log($scope.epages);
		});
		
			$scope.ESCBook = function(data1,data2){
		$.ajax({
    url: "/booknow",
    method: "POST",
    data: {"bookedTimeSlot":data1.TS,"businessName":data2,"bookedRoom":data1.room,"Cat":"Escape Room"},
	});
   	}

})
.controller('BookFight',function($scope,$http,$routeParams){
	$http({
			method:'GET',
			url:'../viewFightp/'+$routeParams.bus_name
		  }).then(function(data){
			//console.log(data);
		  $scope.fpages=data.data;
		  //console.log($scope.fpages);
		});	 

		$scope.FightBook = function(data1,data2){
   		$.ajax({
    url: "/booknow",
    method: "POST",
    data: {"bookedTimeSlot":data1.TS,"bookedField":data1.field
									,"bookedGame":data1.game,"name":data2,"Cat":"Fight"},
    });
	} 
		

})
.controller('BookKora',function($scope,$http,$routeParams){
		$http({
			method:'GET',
			url:'../viewKorap/'+$routeParams.bus_name
		  }).then(function(data){
			//console.log(data);
		  $scope.kpages=data.data;
		  //console.log($scope.kpages);
		});
		
  	$scope.KoraBook = function(data1,data2){
  		$.ajax({
    url: "/booknow",
    method: "POST",
    data: {"bookedTimeSlot":data1.TS,"bookedField":data1.FN,"businessName":data2,"Cat":"Kora"},
    });
	}
	

})
.controller('BookTheater',function($scope,$http,$routeParams){
	$http({
			method:'GET',
			url:'../viewTheatrep/'+$routeParams.bus_name
		  }).then(function(data){
		 $scope.tpages=data.data;
		});	  	 
		
			$scope.TheatreBook = function(data1,data2){
  		$.ajax({
    url: "/booknow",
    method: "POST",
    data: {"bookedTimeSlot":data1.TS,"bookedSeats":data1.seat,"bookedShow":data1.show,"bookedHall":data1.hall,"businessName":data2,"Cat":"Theatre"},
    });

}
});

var myApp = angular.module('RAM', []);

myApp.controller('AppCtrl', function($scope, $http) {
    console.log("Hello World from controller");


var refresh=function(){
$http({method:'GET',
 url: '/viewbusinesspage',
}).then(function(response){

$scope.viewbusinesspage=response.data ;
$scope.business="" ; 
//console.log($scope.viewbusinesspage) ;
});

};

refresh()  ; 

$scope.rating=function(name,rate){
  //var a = [];
 // a[0]= name ;
  // a[1] = rate;
  // a[2]=email ; 


  //a[2] = 'amr@gmail';
  //console.log(a);

var name =name ; 
var rate=rate ; 


$.ajax({
  method:"POST",
url:"/rate",
data:{"name":name,"rate":rate},
}).done(function(response){
console.log(response.data) ;

})

$.ajax({
  method:"POST",
  url:"/view",
  data:{"name":name}}).done(function(response){
console.log(response.data) ;
refresh() ; 
  })


}
});
