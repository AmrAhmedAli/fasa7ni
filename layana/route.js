angular.module('AppRoutes',[])
.config(function($routeProvider,$locationProvider,$httpProvider){

  $httpProvider.defaults.transformRequest = function(data) {
      if (data === undefined) {
        return data; }
      return $.param(data);
    };
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';

    $routeProvider
      .when('/SpecialOffers',{templateUrl: 'views/offers.html',controller:'userController'})
      .when('/search',{templateUrl: 'views/results.html',controller:'searchController', controllerAs:'user'})
      .when('/',{templateUrl: 'views/main.html',controller:'filterController', controllerAs:'visitor'})
      .when('/SignIn',{templateUrl: 'views/signIn.html'})
      .when('/myBookings',{templateUrl: 'views/serviceProviderBookings.html',controller:'spController'})
      .when('/Cinemas',{templateUrl:'views/Cinemas.html',controller:'viewCINController', controllerAs:'user'})
      .when('/Concerts',{templateUrl:'views/Concerts.html',controller:'viewCONCController', controllerAs:'user'})
      .when('/EscapeRooms',{templateUrl:'views/EscapeRooms.html',controller:'viewERController', controllerAs:'user'})
      .when('/Fights',{templateUrl:'views/Fights.html',controller:'viewFController', controllerAs:'user'})
      .when('/Kora',{templateUrl:'views/Kora.html',controller:'viewKController', controllerAs:'user'})
      .when('/Malahy',{templateUrl:'views/Malahy.html',controller:'viewMController', controllerAs:'user'})
      .when('/Races',{templateUrl:'views/Races.html',controller:'viewRController', controllerAs:'user'})
	    .when('/Theatres',{templateUrl:'views/Theatres.html',controller:'viewTHController', controllerAs:'user'})
	    .when('/Trampolines',{templateUrl:'views/Trampolines.html',controller:'viewTRController', controllerAs:'user'})
      .when('/postOffers',{templateUrl:'views/serviceProviderOffers.html',controller:'PostOfferController', controllerAs:'serviceProviderOffer'})
      .when('/SignIn', {templateUrl:'views/signIn.html', controller:'signinController'})
      .when('/SignUp',{templateUrl:'views/signup.html', controller:'signupController'})
      .when('/SignOut',{templateUrl:'views/signup.html', controller:'signoutController'})
	.when('/profile',{templateUrl:'views/userP.html'})
	//.when('/updateUser',{templateUrl:'views/updateUserProfile.html')
      .when('/Concerts/Reviews',{templateUrl: 'views/ConcertsReview.html',controller:"concertController"})
      .when('/Cinemas/Reviews',{templateUrl: 'views/CinemasReview.html',controller:'cinemaController'})
      .when('/EscapeRooms/Reviews',{templateUrl: 'views/EscapeRoomsReview.html',controller:'escapeRoomController'})
      .when('/Fights/Reviews',{templateUrl: 'views/FightsReviews.html',controller:'fightController'})
      .when('/Kora/Reviews',{templateUrl: 'views/KoraReviews.html',controller:'koraController'})
      .when('/Malahy/Reviews',{templateUrl: 'views/MalahyReviews.html',controller:'malahyController'})
      .when('/Race/Reviews',{templateUrl: 'views/RaceReviews.html',controller:'raceController'})
      .when('/Theatre/Reviews',{templateUrl: 'views/TheatreReviews.html',controller:'theatreController'})

	
      .when('/Trampoline/Reviews',{templateUrl: 'views/TrapolineReviews.html',controller:'trampolineController'})
       .when('/serviceP',{templateUrl: 'views/serviceP.html'})
	.when('/admin',{templateUrl: 'views/index55.html'})
	.when('/addBusiness',{templateUrl: 'views/addBusiness.html' , controller: 'serviceprovidercontroller', controllerAs: 'serviceprovider'})
	.when('/viewMybook',{templateUrl: 'views/mybook.html' , controller: 'test', controllerAs: 'user'})
.when('/viewbusreq',{templateUrl: 'views/acc_del.html', controller: 'ad_rejcontroller', controllerAs: 'admin'})

	.when('/updateUser',{templateUrl: 'views/updateUserProfile.html' , controller: 'test', controllerAs: 'user1'})
	.when('/updateBusiness',{templateUrl: 'views/updateBusinessProfile.html' , controller: 'serviceprovidercontroller', controllerAs: 'business1'})
	.when('/addFilter',{templateUrl: 'views/addFilter.html' , controller: 'addFilter', controllerAs: 'filter'})

.when('/replyReviews',{templateUrl: 'views/addReply.html' , controller: 'serviceprovidercontroller1', controllerAs: 'serviceprovider'})


	.when('/newCinema',{templateUrl: 'views/newCinema.html' , controller: 'addCinema', controllerAs: 'businessCinema'})
	.when('/newConcert',{templateUrl: 'views/newConcert.html' , controller: 'addConcert', controllerAs: 'businessConcert'})
	.when('/newEscapeRoom',{templateUrl: 'views/newEscapeRoom.html' , controller: 'addEscapeRoom', controllerAs: 'businessEscapeRoom'})
	.when('/newFight',{templateUrl: 'views/newFight.html' , controller: 'addFight', controllerAs: 'businessFight'})
	.when('/newKora',{templateUrl: 'views/newKora.html' , controller: 'addKora', controllerAs: 'businessKora'})
	.when('/newMalahy',{templateUrl: 'views/newMalahy.html' , controller: 'addMalahy', controllerAs: 'businessMalahy'})
	.when('/newRace',{templateUrl: 'views/newRace.html' , controller: 'addRace', controllerAs: 'businessRace'})
	.when('/newTheatre',{templateUrl: 'views/newTheatre.html' , controller: 'addTheatre', controllerAs: 'businessTheatre'})
	.when('/newTrampoline',{templateUrl: 'views/newTrampoline.html' , controller: 'addTrampoline', controllerAs: 'businessTrampoline'});
       

$locationProvider.html5Mode(true);
});
