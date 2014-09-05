angular.module('setenta-app.services')

    .factory('classFactory', function ($resource) {

        var FUTURE_CLASS_LIST_KEY = getRestUrl("/classes/future.json");
        var FIND_SCHEDULE_KEY = getRestUrl("/classes.json");

        return $resource(null, null, {
            findFuture: {
                url: FUTURE_CLASS_LIST_KEY,
                method: 'JSONP',
                params: {callback: 'JSON_CALLBACK'},
                isArray: true
            },
            findSchedule: {
                url: FIND_SCHEDULE_KEY,
                method: 'JSONP',
                params: {callback: 'JSON_CALLBACK'},
                isArray: true
            }
        })
    });