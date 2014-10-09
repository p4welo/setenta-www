define([

], function () {

    return angular.module('setenta.instructors', [], function ($stateProvider) {
        $stateProvider
            .state('instruktorzy', {
                url: "/instruktorzy",
                templateUrl: "app/instructors/instructors.html",
                controller: "instructorsController"
            });
    });
});