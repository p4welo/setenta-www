define([
    'services/module',
    'utils'
], function (module, utils) {

    module.factory('feedbackFactory', function ($resource) {

//        return {
//            sendFeedback: function (feedback) {
//                $.post(utils.getRestUrl("/feedback/send"), feedback);
//            }
//        }
//        return $resource(null, null, {
//            sendFeedback: {
//                url: utils.getRestUrl("/feedback/:rate/:type/:description/send"),
//                method: 'JSONP',
//                params: {callback: 'JSON_CALLBACK'}
//            }
//        })

        return $resource(null, null, {
            sendFeedback: {
                url: utils.getRestUrl("/feedback/send"),
                method: 'POST'
            }
        })
    })
});