define([

], function () {

    return angular.module('setenta.prices', [], function ($stateProvider) {
        $stateProvider
            .state('cennik', {
                url: "/cennik",
                templateUrl: "app/prices/prices.html",
                controller: "pricesController"
            });
    });
});