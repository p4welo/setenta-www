angular.module('setenta-app.services')

    .factory('classFactory', function ($resource) {

        var FUTURE_CLASS_LIST_KEY = getRestUrl("/classes/future.json");
        var FIND_SCHEDULE_KEY = getRestUrl("/classes.json");

        return $resource(null, null, {
            findFuture: {
                url: FUTURE_CLASS_LIST_KEY,
                method: 'JSONP',
                params: {callback: 'JSON_CALLBACK'},
                isArray: true
            },
            findSchedule: {
                url: FIND_SCHEDULE_KEY,
                method: 'JSONP',
                params: {callback: 'JSON_CALLBACK'},
                isArray: true
            }
        })
    })

    .service("classService", function (classFactory) {

        var getDateByDanceClass = function (thisMonday, danceClass) {
            var day = thisMonday.getDate();

            var startResult = new Date(thisMonday);
            startResult.setDate(day + getDayNoByName(danceClass.day));
            var startTime = danceClass.startTime.split(':');
            startResult.setHours(startTime[0]);
            startResult.setMinutes(startTime[1]);
            startResult.setSeconds(0);

            var endResult = new Date(thisMonday);
            endResult.setDate(day + getDayNoByName(danceClass.day));
            var endTime = danceClass.endTime.split(':');
            endResult.setHours(endTime[0]);
            endResult.setMinutes(endTime[1]);
            endResult.setSeconds(0);

            console.log(danceClass.day + ": " + startResult + "-" + endResult);
            return {
                start: startResult,
                end: endResult
            };
        }

        var getDayNoByName = function (day) {
            if (day == "PN") {
                return 0;
            }
            else if (day == "WT") {
                return 1;
            }
            else if (day == "SR") {
                return 2;
            }
            else if (day == "CZ") {
                return 3;
            }
            else if (day == "PT") {
                return 4;
            }
            else if (day == "SB") {
                return 5;
            }
            else if (day == "ND") {
                return 6;
            }
            else {
                return -1;
            }
        }

        var getLevelDescription = function (level) {
            if (level == "BEGINNER") {
                return "początkujący";
            }
            else if (level == "INTERMEDIATE") {
                return "średniozaawansowany";
            }
            else if (level == "ADVANCED") {
                return "zaawansowany";
            }
            else if (level == "OPEN") {
                return "open";
            }
            else {
                return "";
            }
        }

        this.getScheduleOptionsByRoom = function (roomName) {
            return {
                lang: "pl",
                defaultView: "agendaWeek",
                axisFormat: 'H:mm',
                allDaySlot: false,
                header: {
                    left: '',
                    center: '',
                    right: ''
                },
                slotDuration: "00:15:00",
                minTime: "15:00:00",
                height: 'auto',
                columnFormat: {
                    week: 'dddd'
                },
                events: function (start, end, timezone, callback) {

                    classFactory.findSchedule().$promise.then(
                        function (values) {
                            var events = [];
                            values.forEach(function (danceClass) {
                                if (danceClass.room.name == roomName) {
                                    var date = getDateByDanceClass(start._d, danceClass);

                                    events.push({
                                        title: danceClass.style.name,
                                        level: getLevelDescription(danceClass.level),
                                        start: date.start,
                                        end: date.end,
                                        allDay: false,
                                        canJoin: danceClass.canJoin,
                                        canRegister: danceClass.canRegister
                                    });
                                }
                            });
                            callback(events);
                        }
                    );
                },
                eventRender: function (event, element) {
                    var ap = "<br/>";
                    if (event.canRegister) {
                        ap += '<span class="badge badge-danger">ZAPISY</span>';
                    }
                    else {
                        ap += "<em>" + event.level + "</em>";
                    }
                    element.find('.fc-title').append(ap);
                }
            }
        }
    })
;