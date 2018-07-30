var app = angular.module('myApp', []);
app.controller('companyCtrl',function($scope,  $http, $window) {
  $http.get("https://morning-headland-92448.herokuapp.com/api/v1/companies").then(function (response) {
      $scope.companies = response.data;
          console.log(response);
  });
  $scope.DeleteData = function (index) {
    $scope.id = $scope.companies[index].companyID;
    var deleteUrl = 'https://morning-headland-92448.herokuapp.com/api/v1/companies/' + $scope.id;
    $http.delete(deleteUrl,'DELETE').then(function(response){
      console.log(response);
      $scope.Refresh();
    },function(errorResponse){
      console.log(errorResponse);
    });
  };

  $scope.Refresh = function (){
    $http.get("https://morning-headland-92448.herokuapp.com/api/v1/companies").then(function (response) {
        $scope.companies = response.data;
        console.log(response);
  });
}

  $scope.PostData = function(ev) {
    var postURL = 'https://morning-headland-92448.herokuapp.com/api/v1/companies';
    var tempCompanyID = $scope.companyID;
    var tempCompanyName = $scope.companyName;
    var tempAddress = $scope.address;
    var tempCity = $scope.city;
    var tempCountry = $scope.country;
    var tempOwners = $scope.owners;
    var tempPhoneNumber = $scope.phoneNumber;
    var tempEmail = $scope.email;
    var params = JSON.stringify({companyID: tempCompanyID, companyName: tempCompanyName, address: tempAddress, city: tempCity, country: "tempCountry", owners: "tempOwners", phoneNumber: "tempPhoneNumber", email: "tempEmail"});
    console.log(params);
    $http.post(postURL, params
        ).then(function(response){
          console.log(response);
          $scope.Refresh();
        },function(errorResponse){
          console.log(errorResponse);
          $scope.showAlert(ev);
          //$scope.Alert();
        });
	};

  $scope.Alert = function(){
    $window.alert("something");
  };
  $scope.showAlert = function(ev) {
    // Appending dialog to document.body to cover sidenav in docs app
    // Modal dialogs should fully cover application
    // to prevent interaction outside of dialog
    $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('This is an alert title')
        .textContent('You can specify some description text in here.')
        .ariaLabel('Alert Dialog Demo')
        .ok('Got it!')
        .targetEvent(ev)
    );
  };
});
