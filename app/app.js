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
        })

        .run(function ($rootScope) {
            $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
                if (!fromState.abstract) {
                    if ($("#navbar-collapsible").hasClass("in")){
                        $("#navbar-collapsible").removeClass("in");
                        $("#navbar-collapsible").style("height", "1px");
                        $("#nav-toggle-button").addClass("collapsed");
//                        $("#navbar-collapsible").collapse('hide');
                    }
                }
            });
        })

        .config(function ($translateProvider) {
            $translateProvider.translations('pl', {

                PN: 'Poniedziałek',
                WT: 'Wtorek',
                SR: 'Środa',
                CZ: 'Czwartek',
                PT: 'Piątek',
                SB: 'Sobota',
                ND: 'Niedziela',

                BEGINNER: "Początkujący",
                INTERMEDIATE: "Średniozaawansowany",
                ADVANCED: "Zaawansowany",
                OPEN: "Otwarty"
            });
            $translateProvider.preferredLanguage('pl');
        })
});