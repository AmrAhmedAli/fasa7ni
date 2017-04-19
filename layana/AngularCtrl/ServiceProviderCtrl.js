angular.module('SC',[]).controller('serviceprovidercontroller', function($http,$location,$scope){
var app =this;
	this.addBusiness = function(regData){
	app.error = false;
	console.log(regData.name);
	console.log(regData.location);
	console.log(regData.category);
	console.log(regData.emails);
	console.log(regData.numbers);
	console.log(regData.ageRequirement);
	console.log(regData.address);
	console.log(regData.openingHours);
	console.log(regData.cancelingPolicy);
	console.log(regData.deadlinetoCancel);
	console.log(regData.cancelingPenalty);
	var fd = $scope.fd;
	regData.fd = fd;
	console.log(regData.fd);
	
		console.log(fd);
	$http({
	method: 'POST',
	 url: '/business',
	data:{"name": regData.name, "location": regData.location, "category":regData.category, "emails":regData.emails, "numbers":regData.numbers, "ageRequirement":regData.ageRequirement,"address": regData.ageRequirement, "openingHours":regData.openingHours , "cancelingPolicy":regData.cancelingPolicy , "deadlinetoCancel":regData.deadlinetoCancel , "cancelingPenalty":regData.cancelingPenalty , "fd" :fd }
	 });

			};

$scope.uploadFile = function(files) {
    var fd = new FormData();
    //Take the first selected file
    fd.append("file", files[0]);
	$scope.fd = fd;

};



});
