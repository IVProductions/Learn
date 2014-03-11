function dragCtrl($scope, $location) {

    //jQuery.event.props.push('dataTransfer');

    $scope.redirect = function(path) {
        $location.path(path);
    };

    $scope.dick = function() {
        //document.getElementById("mongo").style.backgroundColor="red";
        //$("#mongo").hide();
    }

}