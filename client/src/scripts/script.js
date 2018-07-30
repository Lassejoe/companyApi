var app = angular.module('myApp', []);
app.controller('companyCtrl', function($scope, $http) {
  $http.get("https://morning-headland-92448.herokuapp.com/api/v1/companies").then(function (response) {
      $scope.companies = response.data;
          console.log(response);
  });
  $scope.DeleteData = function (index) {
    $scope.id = $scope.companies[index].companyID;
    var deleteUrl = 'https://morning-headland-92448.herokuapp.com/api/v1/companies/' + $scope.id + ".html";
    try {
      $http.delete(deleteUrl)
     .then(
         function(response){
           // success callback
         },
         function(response){
           // failure call back
           console.log(response.status);
         }
      );
    } catch (e) {

    } finally {

    }


  };
  $scope.post = function(value) {
		$http.post("https://morning-headland-92448.herokuapp.com/api/v1/companies", { 'movie': value }).success(function(result) {
		    console.log(result);
		    $scope.resultPost = result;
		}).error(function() {
		    console.log("error");
		});
	};
});
