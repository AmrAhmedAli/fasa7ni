angular.module('SignUpCtrl',['AppRoutes']).controller('signupController', function($scope, $http) {

		$scope.show = false;
		$scope.showPhone = function() {
				console.log('show');
				$scope.show = true;
		};
		$scope.hidePhone = function() {
				$scope.show = false;
		};
		$scope.showMessage=false;
		//name, email, password, confirmedPassword, birthdate, gender, homelocation, wayofContact, phoneNumber
		$scope.sendForm =function(form){
				console.log('clicked');

				var name=$scope.name;
				var email=$scope.email;
				var password=$scope.password;
				var confirmedPassword=$scope.confirmedPassword;
				var gender=$scope.gender;
				var birthdate=($scope.birthdate).toString;
				var homelocation= $scope.homelocation;
				var contact=$scope.contact;
				var phoneNumber=$scope.phoneNumber;

				$http({
					method: 'POST',
					url: '/signupUser',
					data: {'name': name, 'email':email, 'password':password, 'confirmedPassword':confirmedPassword, 'gender':gender, 'homelocation':homelocation, 'contact': phoneNumber, 'birthdate': birthdate},
					headers: {'Content-Type': 'application/x-www-form-urlencoded'}
				}).then(function(response){
					$scope.showMessage=true;
					$scope.errorMessage=response.data});
		};


});
