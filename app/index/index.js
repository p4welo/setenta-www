define([
    'index/module',
    'index/modal/feedbackModal',
    'services/notificationService'
], function (module) {

    module.controller("feedbackController", function ($scope, $modal, notificationService) {
        $scope.feedbackModal = function () {
            var modalInstance = $modal.open({
                templateUrl: 'app/index/modal/feedbackModal.html',
                controller: "sendFeedbackController"
            });
            modalInstance.result.then(function () {
                notificationService.success("Dziękujemy za opinię");
            });
        }
    })
});