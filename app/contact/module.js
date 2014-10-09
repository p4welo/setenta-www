define([

], function () {

    return angular.module('setenta.contact', [], function ($stateProvider) {
        $stateProvider
            .state('kontakt', {
                url: "/kontakt",
                templateUrl: "app/contact/contact.html",
                controller: 'contactController'
            });
    });
});