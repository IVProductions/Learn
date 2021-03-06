
var Learn = angular.module("Learn", ["ngRoute"]).run(function() {
    FastClick.attach(document.body);
}); //add ngRoute ($routeProvider) as a dependency for the app, and init fastclick on body


<!--Routing-->
Learn.config(function ($routeProvider){
    $routeProvider.when("/", {
        templateUrl:"app/partials/main.html",
        controller:"mainCtrl"
    }).when("/main",{
            templateUrl:"app/partials/main.html",
            controller:"mainCtrl"
        }).when("/splash",{
            templateUrl:"app/partials/splash.html",
            controller:"mainCtrl"
        }).otherwise({
            redirectTo:"/"
        })
});