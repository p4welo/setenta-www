define([
    'services/module'
], function (module) {

    function getRestUrl(uri) {
        var SERVER_URL = "http://91.218.78.136/ap/public";
        return SERVER_URL + uri;
    }

    module.factory('newsFactory', function ($resource) {

        var NEWS_LIST_KEY = getRestUrl("/news/list.json");

        return $resource(null, null, {
            find: {
                url: NEWS_LIST_KEY,
                method: 'JSONP',
                params: {callback: 'JSON_CALLBACK'},
                isArray: true
            }
        })
    })
});