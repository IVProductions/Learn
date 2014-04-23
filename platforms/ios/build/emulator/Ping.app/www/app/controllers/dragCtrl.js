function dragCtrl($scope, $location) {

    //jQuery.event.props.push('dataTransfer');

    $scope.redirect = function(path) {
        $location.path(path);
    };

    $scope.dick = function() {
        //document.getElementById("mongo").style.backgroundColor="red";
        //$("#mongo").hide();
    }

    $scope.allowDrop = function(ev) {
        ev.preventDefault();
    }

    $scope.drag = function(ev) {
        ev.originalEvent.dataTransfer.setData("Text",ev.target.id);
    }

    $scope.drop= function(ev) {
        ev.preventDefault();
        var data=ev.originalEvent.dataTransfer.getData("Text");
        ev.target.appendChild(document.getElementById(data));
    }


}