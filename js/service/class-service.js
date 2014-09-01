angular.module('setenta-app.services')

    .factory('classFactory', function ($resource) {

        var FUTURE_CLASS_LIST_KEY = getRestUrl("/classes/future.json");

        return $resource(null, null, {
            findFuture: {
                url: FUTURE_CLASS_LIST_KEY,
                method: 'JSONP',
                params: {callback: 'JSON_CALLBACK'},
                isArray: true
            }
        })
    });