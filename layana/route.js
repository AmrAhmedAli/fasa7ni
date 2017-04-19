angular.module('AppRoutes',[])
.config(function($routeProvider,$locationProvider){

    $routeProvider

      .when('/',{templateUrl: 'views/offers.html',controller:'userController', controllerAs:'user'})
      .when('/search',{templateUrl: 'views/results.html',controller:'searchController', controllerAs:'user'});
$locationProvider.html5Mode(true);
});
