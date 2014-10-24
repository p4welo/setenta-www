define([
    'index/module',
    'index/modal/feedbackModal'
], function (module) {

    module.controller("feedbackController", function ($scope, $modal) {
        $scope.feedbackModal = function () {
            $modal.open({
                templateUrl: 'app/index/modal/feedbackModal.html',
                controller: "sendFeedbackController"
            });
        }
    })
});