angular.module('setenta-app.controllers')

    .controller('schedule-ctrl', function ($scope, $filter, classFactory, classService) {

        $scope.initCalendar = function () {
            var bigOptions = classService.getScheduleOptionsByRoom('d');
            $('#bigSchedule').fullCalendar(bigOptions)

            var smallOptions = classService.getScheduleOptionsByRoom('m');
            $('#smallSchedule').fullCalendar(smallOptions)
        }
    });