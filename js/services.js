'use strict';

function getUrl(uri) {
    return SERVER_URL + "/" + uri + "?" + JSONP_SUFFIX;
}

//var SERVER_URL = "http://91.218.78.136:81";
var SERVER_URL = "http://91.218.78.136/ap/public";

//var CLASS_LIST_KEY = "index.php";
var CLASS_LIST_KEY = "classes.json";
var NEWS_LIST_KEY = "news/list.json";
var FUTURE_CLASS_LIST_KEY = "classes/future.json";
var CATEGORY_LIST_KEY = "categories.json";
var JSONP_SUFFIX = "callback=JSON_CALLBACK";

angular.module('SetentaApp.services', [])

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
    });