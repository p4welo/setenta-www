'use strict'

var SERVER_URL = "http://91.218.78.136/ap/public";

angular.module('setenta-app', [
    'ngAnimate',
    'ngSanitize',
    'ui.router',
    'angular-loading-bar',
    'setenta-app.services',
    'setenta-app.controllers'
])

    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/aktualnosci");

        $stateProvider
            .state('aktualnosci', {
                url: "/aktualnosci",
                templateUrl: "app/news/news.html",
                controller: "news-ctrl"
            })
            .state('instruktorzy', {
                url: "/instruktorzy",
                templateUrl: "app/instructors/instructors.html"
            })
            .state('grafik', {
                url: "/grafik",
                templateUrl: "app/schedule/schedule.html",
                controller: "schedule-ctrl"
            })
            .state('cennik', {
                url: "/cennik",
                templateUrl: "app/prices/prices.html"
            })
            .state('wynajem', {
                url: "/wynajem",
                templateUrl: "app/rent/rent.html"
            })
            .state('pokazy', {
                url: "/pokazy",
                templateUrl: "app/shows/shows.html"
            })
            .state('praca', {
                url: "/praca",
                templateUrl: "app/work/work.html"
            })
            .state('kontakt', {
                url: "/kontakt",
                templateUrl: "app/contact/contact.html",
                controller: 'contact-ctrl'
            });
});

angular.module('setenta-app.services', ['ngResource']);
angular.module('setenta-app.controllers', []);
