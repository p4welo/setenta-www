define([
    'schedule/module',
    'services/courseService',
    'fullCalendarLang',
    'services/actionLogService'
], function (module) {

    module.controller('scheduleController', function ($scope, $filter, courseFactory, courseService, actionLogFactory) {

        $scope.initCalendar = function () {
            var bigOptions = courseService.getScheduleOptionsByRoom('d');
            $('#bigSchedule').fullCalendar(bigOptions)

            var smallOptions = courseService.getScheduleOptionsByRoom('m');
            $('#smallSchedule').fullCalendar(smallOptions)
        }
        actionLogFactory.actionSchedule();
    });
});