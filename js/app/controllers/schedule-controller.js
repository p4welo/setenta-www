angular.module('setenta-app.controllers')

    .controller('schedule-ctrl', function ($scope, $filter, classFactory, classService) {

        $scope.initCalendar = function () {
            var bigOptions = classService.getScheduleOptionsByRoom('d');
//            bigOptions.eventRender = function(event, element) {
//                var ap = "<br/>";
//                if (event.canRegister) {
//                    ap += '<span class="badge badge-danger">ZAPISY</span>';
//                }
//                else {
//                    ap += "<em>" + event.level + "</em>";
//                }
//                element.find('.fc-title').append(ap);
//            };
            $('#bigSchedule').fullCalendar(bigOptions)

            var smallOptions = classService.getScheduleOptionsByRoom('m');
//            smallOptions.eventRender = function(event, element) {
//                element.find('.fc-title').append("<br/><em>" + event.level + "</em>");
//            };
            $('#smallSchedule').fullCalendar(smallOptions)
        }
    });