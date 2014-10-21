define([

], function () {
//    var SERVER_URL = "http://localhost:8080/public";
    var SERVER_URL = "http://91.218.78.136/public";

    return {
        getRestUrl: function (uri) {
            return SERVER_URL + uri;
        }
    }
});