define([
    'news/module',
    'services/newsService',
    'services/classService'
], function (module) {

    module.controller('newsController', function ($scope, newsFactory, classFactory) {

        $scope.news = newsFactory.find();
        $scope.futureClass = classFactory.findFuture();
    });
});