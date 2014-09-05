angular.module('setenta-app.controllers', [])

    .controller('news-ctrl', function ($scope, newsFactory, classFactory) {

        $scope.news = newsFactory.find();
        $scope.futureClass = classFactory.findFuture();
    });