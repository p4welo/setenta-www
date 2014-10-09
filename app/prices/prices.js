define([
    'prices/module',
    'services/actionLogService'
], function (module) {

    module.controller('pricesController', function (actionLogFactory) {
        actionLogFactory.actionPriceList();
    });
});