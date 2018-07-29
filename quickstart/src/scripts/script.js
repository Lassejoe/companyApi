var app = angular.module('myApp', []);
app.controller('customersCtrl', function($scope, $http) {
  $http.get("https://morning-headland-92448.herokuapp.com/api/v1/companies").then(function (response) {
      $scope.myData = response.data;
      console.log(response);
  });
  $scope.Delete = function(index){
    $http.delete("https://morning-headland-92448.herokuapp.com/api/v1/companany/companyID", { 'companyID': index }).success(function(result) {
		    console.log(result);
		    $scope.resultDelete = result;
		}).error(function() {
		    console.log("error");
		});
  }
});
