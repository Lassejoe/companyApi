var testApp = angular.module('testApp', []);

testApp.controller('testController' , function ($scope, $http) {
    $scope.home = "This is the homepage";

    $scope.getRequest = function () {
        console.log("I've been pressed!");
        $http.get("https://morning-headland-92448.herokuapp.com/api/v1/companies")
            .then(function successCallback(response){
                $scope.response = response;
            }, function errorCallback(response){
                console.log("Unable to perform get request");
            });
    };

});
