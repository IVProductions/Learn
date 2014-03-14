function mainCtrl($scope, $location, stateService, learnFactory) {

    var scrollHeight = $('.listOfWords').scrollHeight;
    $('.backgroundWords').css("height",""+scrollHeight+"px");

    $scope.stateService=stateService;

    $scope.categories = learnFactory.categories;
    $scope.currentCategory = $scope.categories[0];

    $scope.playSentence = function(){
        // SPILL AV SETNING I DIV
    }

    $scope.changeCategory = function(id){
        $scope.currentCategory = $scope.categories[id];
    }
    $scope.redirect = function(path) {
        $location.path(path);
    };

    $scope.changeShit = function() {
        var parentElement = document.getElementById("deviceready");
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
    }

}
