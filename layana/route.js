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
	.when('/updateUser',{templateUrl:'views/updateUserProfile.html', controller:'UPD', controllerAs:'user1'})
      .when('/Concerts/Reviews',{templateUrl: 'views/ConcertsReview.html',controller:"concertController"})
      .when('/Cinemas/Reviews',{templateUrl: 'views/CinemasReview.html',controller:'cinemaController', controllerAs:'CinRev'})
      .when('/EscapeRooms/Reviews',{templateUrl: 'views/EscapeRoomsReview.html',controller:'escapeRoomController'})
      .when('/Fights/Reviews',{templateUrl: 'views/FightsReviews.html',controller:'fightController'})
      .when('/Kora/Reviews',{templateUrl: 'views/KoraReviews.html',controller:'koraController'})
      .when('/Malahy/Reviews',{templateUrl: 'views/MalahyReviews.html',controller:'malahyController'})
      .when('/Races/Reviews',{templateUrl: 'views/RacesReviews.html',controller:'raceController'})
      .when('/Theatres/Reviews',{templateUrl: 'views/TheatreReviews.html',controller:'theatreController'})
	 .when('/Trampolines/Reviews',{templateUrl: 'views/TrampolineReviews.html',controller:'trampolineController'})

.when('/CountUsers',{templateUrl:'views/numberOfUsers.html',controller:'countController', controllerAs:'admin'})
.when('/rate',{templateUrl: 'views/index2.html', controller: 'AppCtrl', controllerAs:'visitor2'})
	
     
       .when('/serviceP',{templateUrl: 'views/serviceP.html',controller:'SPhomepagecontroller'})
	.when('/admin',{templateUrl: 'views/index55.html'})
	.when('/addBusiness',{templateUrl: 'views/addBusiness.html' , controller: 'serviceprovidercontroller2', controllerAs: 'serviceprovider'})
	.when('/viewMybook',{templateUrl: 'views/mybook.html' , controller: 'test', controllerAs: 'user'})
.when('/viewbusreq',{templateUrl: 'views/acc_del.html', controller: 'ad_rejcontroller', controllerAs: 'admin'})

	
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
	.when('/newTrampoline',{templateUrl: 'views/newTrampoline.html' , controller: 'addTrampoline', controllerAs: 'businessTrampoline'})

  .when('/showusrsk',{templateUrl: 'views/viewusersk.html' ,controller:'appController', controllerAs: 'admin'})
  .when('/viewMalahyp/:bus_name',{templateUrl:'views/viewMalahyp.html',controller:'BookMalahy',controllerAs:'user'})
	.when('/viewConcertp/:bus_name',{templateUrl:'views/viewConcertp.html',controller:'BookConcert',controllerAs:'user'})
	.when('/viewRacep/:bus_name',{templateUrl:'views/viewRacep.html',controller:'BookRace',controllerAs:'user'})
	.when('/viewTrampolinep/:bus_name',{templateUrl:'views/viewTrampolinep.html',controller:'BookTrampoline',controllerAs:'user36'})
	.when('/viewCinemap/:bus_name',{templateUrl:'views/viewCinemap.html',controller:'BookCinema',controllerAs:'user'})
	.when('/viewEscapep/:bus_name',{templateUrl:'views/viewEscapep.html',controller:'BookEscape',controllerAs:'user'})
	.when('/viewFightp/:bus_name',{templateUrl:'views/viewFightp.html',controller:'BookFight',controllerAs:'user'})
	.when('/viewKorap/:bus_name',{templateUrl:'views/viewKorap.html',controller:'BookKora',controllerAs:'user'})
	.when('/viewTheatrep/:bus_name',{templateUrl:'views/viewTheatrep.html',controller:'BookTheater',controllerAs:'user'})




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
