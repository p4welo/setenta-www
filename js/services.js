'use strict';

function getUrl(uri) {
    return SERVER_URL + "/" + uri + "?" + JSONP_SUFFIX;
}

//var SERVER_URL = "http://localhost:8086/api/public";
//var SERVER_URL = "http://vs8123.gensys.pl/server/api/public";
var SERVER_URL = "http://5.133.13.149/server/api/public";
var CLASS_LIST_KEY = "classes.json";
var NEWS_LIST_KEY = "news/list.json";
var FUTURE_CLASS_LIST_KEY = "classes/future.json";
var CATEGORY_LIST_KEY = "categories.json";
var JSONP_SUFFIX = "callback=JSON_CALLBACK";

angular.module('SetentaApp.services', []).

    service('Days', function () {
        return [
            {
                'label' : 'Poniedziałek',
                'number' : 1,
                'code' : 'PN'
            },
            {
                'label' : 'Wtorek',
                'number' : 2,
                'code' : 'WT'
            },
            {
                'label' : 'Środa',
                'number' : 3,
                'code' : 'SR'
            },
            {
                'label' : 'Czwartek',
                'number' : 4,
                'code' : 'CZ'
            },
            {
                'label' : 'Piątek',
                'number' : 5,
                'code' : 'PT'
            },
            {
                'label' : 'Sobota',
                'number' : 6,
                'code' : 'SB'
            },
            {
                'label' : 'Niedziela',
                'number' : 0,
                'code' : 'ND'
            }
        ];
    }).

    service('Classes', function () {
    });