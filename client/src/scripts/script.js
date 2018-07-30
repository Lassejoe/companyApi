var app = angular.module('myApp', []);
app.controller('customersCtrl', function($scope, $http) {
  $http.get("https://morning-headland-92448.herokuapp.com/api/v1/companies").then(function (response) {
      $scope.myData = response.data;
      console.log(response);
  });
  $scope.Delete = function(index){
    $http.delete("https://morning-headland-92448.herokuapp.com/api/v1/companany/12121", { 'companyID': index }).success(function(result) {
		    console.log(result);
		    $scope.resultDelete = result;
		}).error(function() {
		    console.log("error");
		});
  }
  $scope.post = function(value) {
		$http.post("https://morning-headland-92448.herokuapp.com/api/v1/companies", { 'movie': value }).success(function(result) {
		    console.log(result);
		    $scope.resultPost = result;
		}).error(function() {
		    console.log("error");
		});
	};
});
