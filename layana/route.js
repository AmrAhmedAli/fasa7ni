angular.module('AppRoutes',[])
.config(function($routeProvider,$locationProvider){

    $routeProvider
      .when('/SpecialOffers',{templateUrl: 'views/offers.html',controller:'userController'})
      .when('/search',{templateUrl: 'views/results.html',controller:'searchController', controllerAs:'user'})
    .when('/',{templateUrl: 'views/main.html'})
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
	  .when('/PostOffers',{templateUrl:'views/serviceProviderOffers.html',controller:'PostOfferController', controllerAs:'serviceProviderOffer'});
$locationProvider.html5Mode(true);
});
