var JSONP_SUFFIX = "callback=JSON_CALLBACK";

function getUrl(uri) {
    return SERVER_URL + "/" + uri + "?" + JSONP_SUFFIX;
}

function getRestUrl(uri)
{
    var REST_PART = "/ap/rest/company";
    return REST_PART + uri;
}

function getPublicUrl(uri)
{
    var PUBLIC_PART = "/public";
    return "http://91.218.78.136/ap/public" + uri;
}

function hideModal(id) {
    $(id).modal("hide");
}