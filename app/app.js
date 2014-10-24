define([
    'uiRouter',
    'ngAnimate',
    'ngSanitize',
    'ngTouch',
    'loadingBar',

    'services/module',
    'services/feedbackService',

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

        .controller("feedbackController", function ($scope, feedbackFactory) {
            $scope.feedback = {};

            $scope.ratings = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

            $scope.setRate = function (rate) {
                $scope.feedback.rate = rate;
            }

            $scope.select = function (tab) {
                $scope.feedback.type = tab;
            }

            $scope.resolveTabCss = function (tab) {
                return {'active' : tab == $scope.feedback.type};
            }

            $scope.resolveBtnCss = function (r) {
                return r==$scope.feedback.rate ? 'btn-setenta' : 'btn-default'
            }

            $scope.send = function () {
                feedbackFactory.sendFeedback($scope.feedback);
            }
        })
});