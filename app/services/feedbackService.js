define([
    'services/module',
    'utils'
], function (module, utils) {

    module.factory('feedbackFactory', function ($resource) {

        return $resource(null, null, {
            sendFeedback: {
                url: utils.getRestUrl("/feedback/send"),
                method: 'POST',
                params: {callback: 'JSON_CALLBACK'}
            }
        })
    })
});