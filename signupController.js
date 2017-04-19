app.controller('signupController', function($scope, $http) {
		$scope.userForm={
			name:"",
			email:"",
			password:"",
			confirmedPassword:"",
			birthdate:"",
			gender:"",
			homelocation:"",
			contact:"",
			phoneNumber:""
		}
		$scope.show = false;
		$scope.showPhone = function() {
				console.log('show');
				$scope.show = true;
		};
		$scope.hidePhone = function() {
				$scope.show = false;
		};
		$scope.sendForm =function(contact){
				console.log('clicked');
				$http({
					method: 'POST',
					url: '/signupUser',
					data:{ "contact" : contact}
				}).then(function(){console.log("ana");})
		};

});
