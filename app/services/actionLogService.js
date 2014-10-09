define([
    'services/module',
    'utils'
], function (module, utils) {

    module.factory('actionLogFactory', function ($resource) {

        var ACTION_NEWS_PAGE = utils.getRestUrl("/action/news.json");
        var ACTION_INSTRUCTORS_PAGE = utils.getRestUrl("/action/instructors.json");
        var ACTION_SCHEDULE_PAGE = utils.getRestUrl("/action/schedule.json");
        var ACTION_PRICELIST_PAGE = utils.getRestUrl("/action/priceList.json");
        var ACTION_SHOWS_PAGE = utils.getRestUrl("/action/shows.json");
        var ACTION_CONTACT_PAGE = utils.getRestUrl("/action/contact.json");

        return $resource(null, null, {
            actionNews: {
                url: ACTION_NEWS_PAGE,
                method: 'JSONP',
                params: {callback: 'JSON_CALLBACK'}
            },
            actionInstructors: {
                url: ACTION_INSTRUCTORS_PAGE,
                method: 'JSONP',
                params: {callback: 'JSON_CALLBACK'}
            },
            actionSchedule: {
                url: ACTION_SCHEDULE_PAGE,
                method: 'JSONP',
                params: {callback: 'JSON_CALLBACK'}
            },
            actionPriceList: {
                url: ACTION_PRICELIST_PAGE,
                method: 'JSONP',
                params: {callback: 'JSON_CALLBACK'}
            },
            actionShows: {
                url: ACTION_SHOWS_PAGE,
                method: 'JSONP',
                params: {callback: 'JSON_CALLBACK'}
            },
            actionContact: {
                url: ACTION_CONTACT_PAGE,
                method: 'JSONP',
                params: {callback: 'JSON_CALLBACK'}
            }
        })
    })
});