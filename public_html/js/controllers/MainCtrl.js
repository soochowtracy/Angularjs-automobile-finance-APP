'use strict';
controllers.controller('MainCtrl', ['$scope', function($scope) {
        $scope.loanModel = {
            typeSelected: {
                brand: '',
                name: '',
                type: '',
                price: 0,
                image: ''
            }
        };
    }]);

