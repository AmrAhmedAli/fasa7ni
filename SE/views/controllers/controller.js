

function AppCtrl($scope,$http){

console.log("Hey buddy form controlleer")




var refresh = function() {
  
$http.get('/viewbusinesspage').success(function(response){
console.log("I got the data i requested") ;
$scope.viewbusinesspage=response;
    $scope.business = "";

});
};

refresh();




$scope.rating=function(name,rate,email){
  var a = [];
  a[0]= name ;
   a[1] = rate;
   a[2]=email ; 


  //a[2] = 'amr@gmail';
  console.log(a);
   // console.log($scope.task);
  $http.post('/rate',a).success(function(response) {
    console.log(response); 

});

console.log($scope.business)  ;

  $http.put('/ServiceProviderController',$scope.business._id,$scope.business).success(function(response) {

    console.log(response); 

})


}

$scope.edit = function(id) {
  console.log(id);
  $http.get('/viewbusinesspage' + id).success(function(response) {
$scope.business= response;
  });
}; 


$scope.update = function() {
  console.log($scope.business._id);
  $http.post('/ServiceProviderController' + $scope.business._id, $scope.business).success(function(response) {
    refresh();
  })
  };




}