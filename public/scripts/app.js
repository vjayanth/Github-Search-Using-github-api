/**
 * Created by NinjaDev
 */

(function(){
    var app = angular.module("githubSearcher", ["ngRoute","ngAnimate"]);


    app.config(function($routeProvider){
        $routeProvider
            .when("/search", {
                templateUrl: "/public/search.html",
                controller: "githubController"
            })
            .when("/contributors/:name/:repo", {
                templateUrl: "/public/user.html",
                controller: "githubUserController"
            })
            .when("/demo", {
                templateUrl: "/public/demo.html",
                controller: "demoController"
            })
            .otherwise({redirectTo:"/search"});
    });
}());

