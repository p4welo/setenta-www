//var SERVER_URL = "http://91.218.78.136/ap/public";

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
});

//angular.module('setenta-app.services', ['ngResource']);
//angular.module('setenta-app.controllers', []);

//define([
//    'uiRouter',
//    'ngAnimate',
//    'ngTouch',
//    'loadingBar',
//
//    'services/module',
//
//    'customers/index',
//    'news/index',
//    'schedule/index',
//    'system/index'
//], function () {
//
//    return angular.module('activePortal', [
//        'ngAnimate',
//        'ngTouch',
//        'ui.router',
//        'angular-loading-bar',
//
//        'activePortal.system',
//        'activePortal.schedule',
//        'activePortal.news',
//        'activePortal.customers',
//        'activePortal.services',
//
//        'activePortal.services'
//    ], function ($urlRouterProvider) {
//
//        $urlRouterProvider.otherwise("/users");
//    })
//        .config(function ($translateProvider) {
//            $translateProvider.translations('pl', {
//
//                PN: 'Poniedziałek',
//                WT: 'Wtorek',
//                SR: 'Środa',
//                CZ: 'Czwartek',
//                PT: 'Piątek',
//                SB: 'Sobota',
//                ND: 'Niedziela',
//
//                BEGINNER: "Początkujący",
//                INTERMEDIATE: "Średniozaawansowany",
//                ADVANCED: "Zaawansowany",
//                OPEN: "Otwarty",
//
//                m: "Mała",
//                d: "Duża",
//
//                TYPE_REGISTRATION: "Grupa na zapisy",
//                TYPE_OPEN: "Można dołączyć",
//                TYPE_CLOSED: "Nie można dołączyć"
//
//            });
//            $translateProvider.preferredLanguage('pl');
//        });
//});