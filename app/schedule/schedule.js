define([
    'schedule/module',
    'services/courseService',
    'fullCalendarLang',
    'services/actionLogService',
], function (module) {

    module.controller('scheduleController', function ($scope, $filter, courseFactory, courseService, actionLogFactory) {
        $scope.courseList = [];
        $scope.days = ['PN', 'WT', 'SR', 'CZ', 'PT', 'SB', 'ND'];

        $scope.initCalendar = function () {
            courseFactory.findSchedule().$promise.then(
                function (result) {
                    $scope.courseList = result;

                    var bigOptions = courseService.getScheduleOptionsByRoom('d', result);
                    $('#bigSchedule').fullCalendar(bigOptions);

                    var smallOptions = courseService.getScheduleOptionsByRoom('m', result);
                    $('#smallSchedule').fullCalendar(smallOptions);
                }
            )
        }
    });
});