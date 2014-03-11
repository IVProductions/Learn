function dragCtrl($scope, $location) {

    $scope.redirect = function(path) {
        $location.path(path);
    };

}