'use strict';

/* Controllers */
angular.module('SetentaApp.controllers', [])

    .controller('IndexCtrl', function ($scope, $http) {
        var newsUrl = getUrl(NEWS_LIST_KEY);
        $scope.loadingNews = true;
        $scope.loadingClasses = true;

        $http.jsonp(newsUrl)
            .success(function (data) {
                var classesUrl = getUrl(FUTURE_CLASS_LIST_KEY);
                $scope.news = data;
                $scope.loadingNews = false;
                $http.jsonp(classesUrl)
                    .success(function (data) {
                        $scope.classes = data;
                        $scope.error = false;
                        $scope.loadingClasses = false;
                    })
                    .error(function () {
                        $scope.error = true;
                        $scope.loadingClasses = false;
                    });
                $scope.error = false;
            })
            .error(function () {
                $scope.error = true;
                $scope.loadingNews = false;
                $scope.loadingClasses = false;
            });
    })

    .controller('ScheduleCtrl', function ($scope, Days, $http) {
        $scope.days = Days;
        $scope.loading = true;
        $scope.error = false;
        var classesUrl = getUrl(CLASS_LIST_KEY);
        $http.jsonp(classesUrl)
            .success(function (data) {
                $scope.classes = data;
                $scope.error = false;
                $scope.loading = false;

                var categoriesUrl = getUrl(CATEGORY_LIST_KEY);
                $http.jsonp(categoriesUrl)
                    .success(function (data) {
                        $scope.categories = data;
                    })
                    .error(function () {
                    });
            })
            .error(function () {
                $scope.error = true;
                $scope.loading = false;
            });

        $scope.popover = function () {
            $(".popover-link").popover({
                "trigger": "hover",
                "html": true,
                "container": "body",
                "placement": "top"
            });
        };
        $scope.opis = function (c) {
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
        }
    })

    .controller('P1Ctrl', function ($scope, $http) {

    })

    .controller('P2Ctrl', function ($scope, $http) {

    });