angular.module('AppRoutes', ['ngRoute'])
.config(function($routeProvider, $locationProvider){
	

	$routeProvider.when('/viewbusreq',{templateUrl: 'views/acc_del.html', controller: 'appController', controllerAs: 'admin'});
	$routeProvider.when('/viewMybook',{templateUrl: 'views/mybook.html' , controller: 'test', controllerAs: 'user'});
	$routeProvider.when('/addBusiness',{templateUrl: 'views/addBusiness.html' , controller: 'serviceprovidercontroller', controllerAs: 'serviceprovider'});
	$locationProvider.html5Mode(true);
	
});
