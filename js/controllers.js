angular.module('SetentaApp.controllers', [])

    .controller('IndexCtrl', function ($scope, $http, newsFactory) {
        var newsUrl = getUrl(NEWS_LIST_KEY);
        $scope.loadingNews = true;
        $scope.loadingClasses = true;
        $scope.loading = true;

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

    .controller('ScheduleCtrl', function ($scope, $http, classService) {
        $scope.days = classService.resolveDays();
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
            return classService.resolveDescription(c);
        }
    });