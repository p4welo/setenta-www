define([
    'ngTranslate'
], function () {

    return angular.module('setenta.schedule', ['pascalprecht.translate'], function ($stateProvider) {
        $stateProvider
            .state('grafik', {
                url: "/grafik",
                templateUrl: "app/schedule/schedule.html",
                controller: "scheduleController"
            });
    });
});