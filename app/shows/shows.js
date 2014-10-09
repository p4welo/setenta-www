define([
    'shows/module',
    'services/actionLogService'
], function (module) {

    module.controller('showsController', function (actionLogFactory) {
        actionLogFactory.actionShows();
    });
});