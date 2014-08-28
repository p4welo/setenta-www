angular.module('setenta-app.controllers', [])

    .controller('news-ctrl', function ($scope, newsFactory) {

        $scope.news = newsFactory.find();
    });