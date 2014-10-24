define([
    'uiRouter',
    'uiBootstrap',
    'ngAnimate',
    'ngSanitize',
    'ngTouch',
    'loadingBar',

    'services/module',

    'news/news',
    'instructors/instructors',
    'schedule/schedule',
    'prices/prices',
    'shows/shows',
    'contact/contact',
    'index/index'

], function () {

    return angular.module('setenta', [
        'ngAnimate',
        'ngTouch',
        'ngSanitize',
        'ui.router',
        'ui.bootstrap',
        'angular-loading-bar',
        'setenta.services',
        'setenta.news',
        'setenta.instructors',
        'setenta.prices',
        'setenta.schedule',
        'setenta.shows',
        'setenta.contact',
        'setenta.index'
    ])

        .config(function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/aktualnosci");

            $stateProvider
                .state('wynajem', {
                    url: "/wynajem",
                    templateUrl: "app/rent/rent.html"
                })

                .state('praca', {
                    url: "/praca",
                    templateUrl: "app/work/work.html"
                });
        })
});