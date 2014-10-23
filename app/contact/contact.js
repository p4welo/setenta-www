define([
    'contact/module',
    'contact/gmap/gmap',
    'services/actionLogService'
], function (module, gmap) {

    module.controller('contactController', function ($scope, actionLogFactory) {
        $scope.mapInit = gmap.init("mapka");
//        actionLogFactory.actionContact();
    });
});