define([

], function () {

    return angular.module('setenta.shows', [], function ($stateProvider) {
        $stateProvider
            .state('pokazy', {
                url: "/pokazy",
                templateUrl: "app/shows/shows.html",
                controller: "showsController"
            });
    });
});