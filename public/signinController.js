angular.module('SignInCtrl',['AppRoutes']).controller('signinController', function($scope, $http) {

		$scope.isLoggedIn=false;
		$scope.showMessage=false;
		$scope.sendForm =function(form){
				console.log('clicked');

				var email=$scope.email;
				var password=$scope.password;

				$http({
					method: 'POST',
					url: '/signinUser',
					data: {'name': name, 'email':email, 'password':password},
					headers: {'Content-Type': 'application/x-www-form-urlencoded'}
				}).then(function(response){
					$scope.showMessage=true;
					$scope.errorMessage=response.data;
				 	$scope.isLoggedIn=true;});
		};

		$scope.signOut=function(){
			$http({
		          method:'GET',
		          url: '/signOut',
		        }).then(function(){
							$scope.isLoggedIn=true;

						})


		}


});
