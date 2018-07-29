var app = angular.module('myApp', []);
app.controller('customersCtrl', function($scope, $http) {
  $http.get("https://morning-headland-92448.herokuapp.com/api/v1/companies").then(function (response) {
      $scope.myData = response.data;
      console.log(response);
  });
  $scope.Delete = function(index){
    //console.log("went here");
    $http.delete("https://morning-headland-92448.herokuapp.com/api/v1/company/0202")
  }
});
