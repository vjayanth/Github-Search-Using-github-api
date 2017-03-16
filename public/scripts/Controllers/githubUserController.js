/**
 * Created by NinjaDev
 */
(function(githubSearcher) {

    var githubUserController = function(scope, log, location,routeParams,githubService) {

        var onUserComplete = function(data)
        {
            scope.contributors=data;    
             };

        var onError = function(err) {
            log.info(err);
        };
         scope.followContributor=function(username,id){
            var postObj={"username":username}
            githubService
                        .followUser(postObj)
                        .then(function(response){
                            if(response == 'success'){
                               var index= scope.contributors.findIndex(x => x.id==id);
                                scope.contributors[index].follow =true;
                            }
                        },function(error){
                            console.log(error);
                        })
        }

        scope.contributorsparams = routeParams;
         githubService
                 .getContributors(scope.contributorsparams)
               .then(onUserComplete, onError);
    };

    githubUserController.$inject = ['$scope','$log','$location','$routeParams','githubService'];

    githubSearcher.controller("githubUserController", githubUserController);

}(angular.module('githubSearcher')));