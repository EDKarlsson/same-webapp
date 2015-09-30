"use strict";
angular.module('same', ['firebase', 'ngMaterial', 'ui.bootstrap', 'ui.router']).config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/home',
        templateUrl: 'partials/home.html',
        controller: 'MainCtrl'
    }
        .state('login',{
            url'/home',
            templateUrl:'partials/login.html',
            controller:'LoginCtrl'
        }));
}]);

angular.module('same').service('ConnectService', ['$scope', function ($scope, $firebaseObject) {
//    var ref = new Firebase("https://same-webapp.firebaseio.com");

}]);

angular.module('same').controller('LoginCtrl', ['$scope', '$firebaseObject', function ($scope, $firebaseObject) {
    var fireRef = new Firebase('https://same-webapp.firebaseio.com');
$scope.profile = $firebaseObject(fireRef.child('users'))
    $scope.user = {
        name: '',
        pass: '',
        email: ''
    };
    var users = [];

}]);
