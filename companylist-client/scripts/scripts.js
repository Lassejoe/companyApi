function MyController($scope, $http) {
        $scope.items = []

        $scope.getItems = function() {
         $http({method : 'GET',url : 'https://morning-headland-92448.herokuapp.com/api/v1/companies'})
            .success(function(data, status) {
                $scope.items = data;
             })
            .error(function(data, status) {
                alert("Error");
            })
        }
    }
