'use strict'

var SERVER_URL = "http://91.218.78.136/ap/public";

angular.module('setenta-app', [
    'ngAnimate',
    'ngSanitize',
    'ui.router',
    'setenta-app.loadingBar',
    'setenta-app.services',
    'setenta-app.controllers'
])

    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/aktualnosci");

        $stateProvider
            .state('aktualnosci', {
                url: "/aktualnosci",
                templateUrl: "partials/news/news.html",
                controller: "news-ctrl"
            })
            .state('instruktorzy', {
                url: "/instruktorzy",
                templateUrl: "partials/instructors/instructors.html"
            })
            .state('grafik', {
                url: "/grafik",
                templateUrl: "partials/schedule/schedule.html",
                controller: "schedule-ctrl"
            })
            .state('cennik', {
                url: "/cennik",
                templateUrl: "partials/prices/prices.html"
            })
            .state('wynajem', {
                url: "/wynajem",
                templateUrl: "partials/rent/rent.html"
            })
            .state('pokazy', {
                url: "/pokazy",
                templateUrl: "partials/shows/shows.html"
            })
            .state('praca', {
                url: "/praca",
                templateUrl: "partials/work/work.html"
            })
            .state('kontakt', {
                url: "/kontakt",
                templateUrl: "partials/contact/contact.html",
                controller: 'contact-ctrl'
            });
});

angular.module('setenta-app.services', ['ngResource']);
angular.module('setenta-app.controllers', []);