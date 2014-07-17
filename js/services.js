var CLASS_LIST_KEY = "classes.json";
var NEWS_LIST_KEY = "news/list.json";
var FUTURE_CLASS_LIST_KEY = "classes/future.json";
var CATEGORY_LIST_KEY = "categories.json";

angular.module('SetentaApp.services', ['ngResource'])

    .service('classService', function () {

        this.resolveDescription = function (c) {
            var result = "<h4>" + c.style.name + "</h4>" +
                "<table>" +
                "<tr>" +
                "<td><strong>Instruktor:&nbsp;&nbsp;&nbsp;</strong></td><td>"
                + c.instructor.firstName + " " + c.instructor.lastName + "</td>" +
                "</tr>";
            if (c.level != "") {
                result += "<tr>" +
                    "<td><strong>Poziom: </strong></td><td>";
                if (c.level == 'BEGINNER') {
                    result += "podstawowy";
                }
                else if (c.level == 'INTERMEDIATE') {
                    result += "średniozaawansowany";
                }
                else {
                    result += "zaawansowany";
                }
                result += "</td>" +
                    "</tr>";
            }

            result += "<tr>" +
                "<td><strong>Sala: </strong></td><td>";
            if (c.room.name == 'd') {
                result += "duża";
            }
            else {
                result += "mała";
            }
            result += "</td>" +
                "</tr>";

            result += "</table>";
            if (c.canRegister) {
                result += "<div class='alert-danger alert-popover'>Zbieramy grupę - zapisz się już dziś!</div>"
            }
            if (c.canJoin) {
                result += "<div class='alert-danger alert-popover'>Wolne miejsca - dołącz do grupy!</div>"
            }

            return result;
        };

        this.resolveDays = function () {
            return [
                {
                    'label' : 'Poniedziałek',
                    'number' : 1,
                    'code' : 'PN'
                },
                {
                    'label' : 'Wtorek',
                    'number' : 2,
                    'code' : 'WT'
                },
                {
                    'label' : 'Środa',
                    'number' : 3,
                    'code' : 'SR'
                },
                {
                    'label' : 'Czwartek',
                    'number' : 4,
                    'code' : 'CZ'
                },
                {
                    'label' : 'Piątek',
                    'number' : 5,
                    'code' : 'PT'
                },
                {
                    'label' : 'Sobota',
                    'number' : 6,
                    'code' : 'SB'
                },
                {
                    'label' : 'Niedziela',
                    'number' : 0,
                    'code' : 'ND'
                }
            ];
        }
    })

    .factory('newsFactory', function ($resource) {

        var NEWS_LIST_KEY = "news.php";
        var GET_NEWS_KEY = getPublicUrl("/news/:sid");

        return $resource(null, null, {
            find: {
                url: NEWS_LIST_KEY,
                method: 'GET',
                isArray: true
            },
            get: {
                url: GET_NEWS_KEY,
                method: 'GET'
            }
        })
    });