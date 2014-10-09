define([

], function () {

    return angular.module('setenta.schedule', [], function ($stateProvider) {
        $stateProvider
            .state('grafik', {
                url: "/grafik",
                templateUrl: "app/schedule/schedule.html",
                controller: "scheduleController"
            });
    });
});