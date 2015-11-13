"use strict";

angular.module('same').controller('ResourceCtrl', ['$scope', '$http', function ($scope, $http) {

    $http.get('https://same-webapp.firebaseapp.com/lib/json/images.json').then(function (data) {
            $scope.images = data;
        },
        (function (response) {
            // Alert of failure
        }));

}]);