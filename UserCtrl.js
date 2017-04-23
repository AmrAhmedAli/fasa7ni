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
    url:'/fight',
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
    url:'/race',
}).then(function(data){

$scope.place=data.data;


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

angular.module('SignInCtrl',['AppRoutes']).controller('signinController', function($rootScope, $scope, $location, $http) {

		$rootScope.isLoggedIn=false;
		$scope.showMessage=false;
		$scope.sendForm =function(form){

				var email=$scope.email;
				var password=$scope.password;

				$http({
					method: 'POST',
					url: '/signinUser',
					data: {'name': name, 'email':email, 'password':password},
					headers: {'Content-Type': 'application/x-www-form-urlencoded'}
				}).then(function(response){
					var message=response.data;
					if(message ==='Success'){
						$rootScope.isLoggedIn=true;
						$location.url('/');
					}
					else {
						$scope.showMessage=true;
						$scope.errorMessage=response.data;

					}});
		};


});

angular.module('CinemaReviewsCtrl',[]).controller('cinemaController',function($scope,$http){
console.log("hh");
  $http({
          method:'GET',
          url: '/cinemasReviews',
        }).then(function(data){
          $scope.concerts=data.data;
  console.log($scope.concerts);
        });

});
angular.module('ConcertReviewsCtrl',[]).controller('concertController',function($scope,$http){
console.log("hh");
  $http({
          method:'GET',
          url: '/concertsReviews',
        }).then(function(data){
          $scope.concerts=data.data;
  console.log($scope.concerts);
        });

});
angular.module('EscapeRoomReviewsCtrl',[]).controller('escapeRoomController',function($scope,$http){
console.log("hh");
  $http({
          method:'GET',
          url: '/escaperoomsReviews',
        }).then(function(data){
          $scope.concerts=data.data;
  console.log($scope.concerts);
        });

});
angular.module('FightReviewsCtrl',[]).controller('fightController',function($scope,$http){
console.log("hh");
  $http({
          method:'GET',
          url: '/fightReviews',
        }).then(function(data){
          $scope.concerts=data.data;
  console.log($scope.concerts);
        });

});
angular.module('KoraReviewsCtrl',[]).controller('koraController',function($scope,$http){
console.log("hh");
  $http({
          method:'GET',
          url: '/koraReviews',
        }).then(function(data){
          $scope.concerts=data.data;
  console.log($scope.concerts);
        });

});
angular.module('MalahyReviewsCtrl',[]).controller('malahyController',function($scope,$http){
console.log("hh");
  $http({
          method:'GET',
          url: '/malahyReviews',
        }).then(function(data){
          $scope.concerts=data.data;
  console.log($scope.concerts);
        });

});
angular.module('RaceReviewsCtrl',[]).controller('raceController',function($scope,$http){
console.log("hh");
  $http({
          method:'GET',
          url: '/raceReviews',
        }).then(function(data){
          $scope.concerts=data.data;
  console.log($scope.concerts);
        });

});
angular.module('TheatreReviewsCtrl',[]).controller('theatreController',function($scope,$http){
console.log("hh");
  $http({
          method:'GET',
          url: '/theatreReviews',
        }).then(function(data){
          $scope.concerts=data.data;
  console.log($scope.concerts);
        });

});
angular.module('TrampolineReviewsCtrl',[]).controller('trampolineController',function($scope,$http){
console.log("hh");
  $http({
          method:'GET',
          url: '/trampolineReviews',
        }).then(function(data){
          $scope.concerts=data.data;
  console.log($scope.concerts);
        });

});


angular.module('SignUpCtrl',['AppRoutes']).controller('signupController', function($scope, $rootScope, $location, $http) {

		$scope.show = false;
		$scope.showPhone = function() {
				$scope.show = true;
		};
		$scope.hidePhone = function() {
				$scope.show = false;
		};
		$scope.showMessage=false;

		$scope.sendForm =function(form){


				var name=$scope.name;
				var email=$scope.email;
				var password=$scope.password;
				var confirmedPassword=$scope.confirmedPassword;
				var gender=$scope.gender;
				var homelocation= $scope.homelocation;
				var contact=$scope.contact;
				var phoneNumber=$scope.phoneNumber;

				$http({
					method: 'POST',
					url: '/signupUser',
					data: {'name': name, 'email':email, 'password':password, 'confirmedPassword':confirmedPassword, 'gender':gender, 'homelocation':homelocation, 'contact': phoneNumber},
					headers: {'Content-Type': 'application/x-www-form-urlencoded'}
				}).then(function(response){

          if(response.data==='Success'){
            $rootScope.isLoggedIn=true;
						$location.url('/');

          }

          else{

            $scope.showMessage=true;
            $scope.errorMessage=response.data};

          })


		};


});

angular.module('SignOutCtrl',['AppRoutes']).controller('signoutController', function($rootScope, $location, $http) {

		$rootScope.isLoggedIn=false;
    console.log('I am Here');

			$http({
		          method:'POST',
		          url: '/signOut',
		        }).then(function(response){
              if(response.data='logout'){
                $rootScope.isLoggedIn=false;
                $location.url('/');

            }
			})

});
