define([
    'news/module',
    'services/newsService'
], function (module) {

    module.controller('newsController', function ($scope, newsFactory) {

        $scope.news = newsFactory.find();
    });
});