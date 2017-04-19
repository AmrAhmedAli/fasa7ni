angular.module('AppRoutes',['ngRoute'])
.config(function($routeProvider,$locationProvider){
 console.log("route");
    $routeProvider

      .when('/',{templateUrl: 'views/offers.html',controller:'userController', controllerAs:'user'})
      .when('/search',{templateUrl: 'views/results.html',controller:'searchController', controllerAs:'user'})

      .when('/viewCIN',{templateUrl:'views/Cinemas.html',controller:'viewCINController', controllerAs:'user'})
      .when('/viewCONC',{templateUrl:'views/Concerts.html',controller:'viewCONCController', controllerAs:'user'})
      .when('/viewER',{templateUrl:'views/EscapeRooms.html',controller:'viewERController', controllerAs:'user'})
      .when('/viewF',{templateUrl:'views/Fights.html',controller:'viewFController', controllerAs:'user'})
      .when('/viewK',{templateUrl:'views/Kora.html',controller:'viewKController', controllerAs:'user'})
      .when('/viewM',{templateUrl:'views/Malahy.html',controller:'viewMController', controllerAs:'user'})
      .when('/viewR',{templateUrl:'views/Races.html',controller:'viewRController', controllerAs:'user'})
	  .when('/viewTH',{templateUrl:'views/Theatres.html',controller:'viewTHController', controllerAs:'user'})
	  .when('/viewTR',{templateUrl:'views/Trampolines.html',controller:'viewTRController', controllerAs:'user'});

$locationProvider.html5Mode(true);
});
