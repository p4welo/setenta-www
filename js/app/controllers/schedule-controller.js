angular.module('setenta-app.controllers')

    .controller('schedule-ctrl', function ($scope, classFactory) {
        $scope.classList = classFactory.findSchedule();
    });