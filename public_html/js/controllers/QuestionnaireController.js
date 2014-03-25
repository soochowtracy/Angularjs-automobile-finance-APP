'use strict';
controllers.controller('QuestionnaireController', ['$scope', function($scope) {
        $scope.Q1yes = function() {
            if (confirm('')) {
                self.location = '#/calculator'; //跳转到标准信贷
            }
        };
        $scope.Q1no = function() {
            if (confirm('')) {
                self.location = ''; //跳转到金融方案
            }
        };
        $scope.Q2yes = function() {
            if (confirm('')) {
                self.location = ''; //跳转到标准信贷
            }
        };
        $scope.Q2no = function() {
            if (confirm('')) {
                self.location = ''; //跳转到金融方案
            }
        };
        $scope.modalShown = false;
        $scope.toggleModal = function() {
            $scope.modalShown = !$scope.modalShown;
        };
    }]);