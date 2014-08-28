angular.module('setenta-app.services')

    .factory('newsFactory', function ($resource, $http) {

        var NEWS_LIST_KEY = getRestUrl("/news/list.json");
        return $resource(null, null, {
            find: {
                url: NEWS_LIST_KEY,
                method: 'JSONP',
                params: {callback: 'JSON_CALLBACK'},
                isArray: true
            }
        })
    });