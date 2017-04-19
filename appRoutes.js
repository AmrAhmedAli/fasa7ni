angular.module('AppRoutes',[])
.config(function($routeProvider,$locationProvider){

    $routeProvider

      .when('/concerts',{templateUrl: 'concerts.html',controller:'concertController', controllerAs:'user'});
$locationProvider.html5Mode(true);
});
