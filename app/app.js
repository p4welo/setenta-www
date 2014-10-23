define([
    'uiRouter',
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
    'contact/contact'
], function () {

    return angular.module('setenta', [
        'ngAnimate',
        'ngTouch',
        'ngSanitize',
        'ui.router',
        'angular-loading-bar',
        'setenta.services',
        'setenta.news',
        'setenta.instructors',
        'setenta.prices',
        'setenta.schedule',
        'setenta.shows',
        'setenta.contact'
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

        .controller("navController", function ($scope, $state) {
            $scope.navigate = function (state) {
                $(".navbar-collapse").collapse('hide');
                $state.go(state);
            }
        })
});