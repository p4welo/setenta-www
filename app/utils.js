define([

], function () {
    var SERVER_URL = "http://91.218.78.136/ap/public";

    return {
        getRestUrl: function (uri) {
            return SERVER_URL + uri;
        }
    }
});