define([

], function () {

    return angular.module('setenta.news', [], function ($stateProvider) {
        $stateProvider
            .state('aktualnosci', {
                url: "/aktualnosci",
                templateUrl: "app/news/news.html",
                controller: "newsController"
            });
    });
});