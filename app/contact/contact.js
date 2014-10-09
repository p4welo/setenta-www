define([
    'contact/module',
    'contact/gmap/gmap'
], function (module, gmap) {

    module.controller('contactController', function ($scope) {
        $scope.mapInit = gmap.init("mapka");
    });
});