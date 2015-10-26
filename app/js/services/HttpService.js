"use strict";

angular.module('same').factory('HttpService', ['$http', function ($http) {
    var getPictures = function () {
        $http.get('https://web-url.some.ext').then(function (response, data) {
            console.log(response);
            var dataArray = data.urls;
            return dataArray;
        });
    };

    return {
        getPictures: getPictures
    };
}]);