"use strict";
angular.module('same', ['ngMaterial', 'ui.bootstrap', 'ui.router', 'firebase', 'ngMessages']).config(['$stateProvider', '$urlRouterProvider', '$mdThemingProvider', function ($stateProvider, $urlRouterProvider, $mdThemingProvider) {

    $mdThemingProvider.theme('default').primaryPalette('red', {
        'default': '700'
    });
    $mdThemingProvider.theme('default').accentPalette('light-blue');

    $mdThemingProvider.theme('default').warnPalette('orange');
    $stateProvider.state('home', {
        url        : '',
        templateUrl: 'partials/home.html',
        controller : 'MainCtrl'
    }).state('login', {
        url        : '/login',
        templateUrl: 'partials/login.html',
//        controller : 'AuthCtrl'
    }).state('register', {
        url        : '/register',
        templateUrl: 'partials/templates/register.tmpl.html',
//        controller : 'AuthCtrl'
    }).state('about', {
        url        : '/about',
        templateUrl: 'partials/aboutUs.html'
    }).state('gallery', {
        url        : '/gallery',
        templateUrl: 'partials/photo.gallery.html'
    }).state('calendar', {
        url        : '/calendar',
        templateUrl: 'partials/calendar.html'
    });
}]);

angular.module('same').service('ConnectService', ['$scope', '$firebaseObject', function ($scope, $firebaseObject) {
//    var ref = new Firebase("https://same-webapp.firebaseio.com");
}]);
angular.module('same').constant('FirebaseUrl', 'https://same-webapp.firebaseio.com/');
