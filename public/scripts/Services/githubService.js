/**
 * Created by NinjaDev
 */
(function(){

    var githubService = function(http, log){

        var getResult = function(topic, page, pageSize){
            return http.get("https://api.github.com/search/repositories?q=" + topic + "&page=" + page + "&per_page=" + pageSize)
                .then(function(response){
                    return response.data;
                });
        };

        var getUser = function(username)
        {
            return http.get("https://api.github.com/users/" + username)
                .then(function(response){
                    return response.data;
                });
        };

        var getContributors=function(contributorsParams){
            return http.get("https://api.github.com/repos/" + contributorsParams.name+'/'+contributorsParams.repo+'/contributors')
                .then(function(response){
                    return response.data;
                });

        }

        var followUser = function(postObj)
        {
            return http.post("/followUser", postObj)
                .then(function(response){
                    return response.data;
                });
        };
        return {
            getResult: getResult,
            getUser: getUser,
            followUser:followUser,
            getContributors:getContributors
        };

    };

    githubService.$inject = ['$http','$log'];

    var module = angular.module("githubSearcher");
    module.factory("githubService", githubService);

}());