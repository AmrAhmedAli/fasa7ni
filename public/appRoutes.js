angular.module('AppRoutes',[])
.config(function($routeProvider,$locationProvider,$httpProvider){

  $httpProvider.defaults.transformRequest = function(data) {
      if (data === undefined) {
        return data; }
      return $.param(data);
    };
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';


    $routeProvider.when("/concerts",{templateUrl: "concerts.html",controller:"concertController"});
    $routeProvider.when('/cinemas',{templateUrl: 'cinemas.html',controller:'cinemaController'});
    $routeProvider.when('/escaperooms',{templateUrl: 'escaperooms.html',controller:'escapeRoomController'});
    $routeProvider.when('/fight',{templateUrl: 'fight.html',controller:'fightController'});
    $routeProvider.when('/kora',{templateUrl: 'kora.html',controller:'koraController'});
    $routeProvider.when('/malahy',{templateUrl: 'malahy.html',controller:'malahyController'});
    $routeProvider.when('/race',{templateUrl: 'race.html',controller:'raceController'});
    $routeProvider.when('/theatre',{templateUrl: 'theatre.html',controller:'theatreController'});
    $routeProvider.when('/trampoline',{templateUrl: 'trampoline.html',controller:'trampolineController'});
    $routeProvider.when('/signup',{templateUrl: 'signup.html',controller:'signupController'});
    $routeProvider.when('/signin', {templateUrl:'signin.html', controller:'signinController'});

$locationProvider.html5Mode(true);
});
