var app = angular.module('myApp', []);
app.controller('companyCtrl', function($scope, $http) {
  $http.get("https://morning-headland-92448.herokuapp.com/api/v1/companies").then(function (response) {
      $scope.companies = response.data;
          console.log(response);
  });
  $scope.DeleteData = function (index) {
    $scope.id = $scope.companies[index].companyID;
    var deleteUrl = 'https://morning-headland-92448.herokuapp.com/api/v1/companies/' + $scope.id;
    var del = {
      method: 'DELETE',
      url: deleteUrl,
      headers: {
        'Content-Type': 'application/json'
      }
    }
    $http(del).then(function(response){
      console.log(response);
    },function(errorResponse){
      console.log(errorResponse);
    });
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
