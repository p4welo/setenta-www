(function (head) {
    "use strict";
    head.js(
        { require: "./vendor/requirejs/require.js" },
        { jquery: "./vendor/jquery/dist/jquery.js" },
        { angular: "./vendor/angular/angular.js" },
        { bootstrap: "./vendor/bootstrap/dist/js/bootstrap.min.js" }
    )
        .ready("ALL", function () {

            require.config({
                baseUrl: './app',
                paths: {
                    'ngSanitize': "../vendor/angular-sanitize/angular-sanitize",
                    'ngResource': "../vendor/angular-resource/angular-resource",
                    'uiRouter': "../vendor/angular-ui-router/release/angular-ui-router",
                    'uiBootstrap': "../vendor/angular-ui-bootstrap/ui-bootstrap-tpls",
                    'ngAnimate': "../vendor/angular-animate/angular-animate",
                    'ngTouch': "../vendor/angular-touch/angular-touch",
                    'ngTranslate': "../vendor/angular-translate/angular-translate",
                    'loadingBar': "../vendor/angular-loading-bar/build/loading-bar",
                    'pnotify': "../vendor/pnotify/pnotify.core",
                    'momentJs': '../vendor/moment/moment',
                    'fullCalendar': '../vendor/fullcalendar/dist/fullcalendar',
                    'fullCalendarLang': '../vendor/fullcalendar/dist/lang-all',
                    'async': '../vendor/requirejs-plugins/src/async'
                },
                shim: {
                    'ngAnimate': {
                        'exports': 'ngAnimate'
                    },
                    'loadingBar': {
                        'exports': 'loadingBar',
                        'deps': ['ngAnimate']
                    },
                    'momentJs': {
                        'exports': 'momentJs'
                    },
                    'fullCalendar': {
                        'exports': 'fullCalendar',
                        'deps': ['momentJs']
                    },
                    'fullCalendarLang': {
                        'exports': 'fullCalendarLang',
                        'deps': ['fullCalendar']
                    }
                }
            });

            require(["main"],

                function (bootstrap) {
                });
        });
}(window.head));