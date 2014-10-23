define([
    'news/module',
    'services/newsService',
    'services/actionLogService'
], function (module) {

    module.controller('newsController', function ($scope, newsFactory, actionLogFactory) {

        $scope.news = newsFactory.find();
//        actionLogFactory.actionNews();
    });
});