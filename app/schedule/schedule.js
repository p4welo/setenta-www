define([
    'schedule/module',
    'services/classService',
    'fullCalendarLang'
], function (module) {

    module.controller('scheduleController', function ($scope, $filter, classFactory, classService) {

        $scope.initCalendar = function () {
            var bigOptions = classService.getScheduleOptionsByRoom('d');
            $('#bigSchedule').fullCalendar(bigOptions)

            var smallOptions = classService.getScheduleOptionsByRoom('m');
            $('#smallSchedule').fullCalendar(smallOptions)
        }
    });
});