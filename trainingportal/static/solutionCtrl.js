app.controller("solutionCtrl", function($scope, $http, $routeParams) {
    $http.get('/public/securedojodbdata')
    .then((response) => {
        if(response != null && response.data != null){
            $scope.solutionvisibilitypermissions = Boolean(response.data);
        }
    });
    var challengeId = $routeParams.challengeId;
    $scope.solutionLink = "challenges/solutions/"+challengeId;
});