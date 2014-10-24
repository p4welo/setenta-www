define([
    'index/module',
    'services/feedbackService'
], function (module) {

    module.controller('sendFeedbackController', function ($scope, $modalInstance, feedbackFactory) {
        $scope.feedback = {};

        $scope.ratings = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

        $scope.setRate = function (rate) {
            $scope.feedback.rate = rate;
        }

        $scope.select = function (tab) {
            $scope.feedback.type = tab;
        }

        $scope.resolveTabCss = function (tab) {
            return {'active' : tab == $scope.feedback.type};
        }

        $scope.resolveBtnCss = function (r) {
            return r==$scope.feedback.rate ? 'btn-setenta' : 'btn-default'
        }

        $scope.send = function () {
            feedbackFactory.sendFeedback($scope.feedback);
            $modalInstance.close();
        }

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    });
});