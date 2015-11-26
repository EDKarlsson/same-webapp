"use strict";
angular.module('same', ['ngMaterial', 'ui.bootstrap', 'ui.router', 'firebase', 'ngMessages', 'angular-md5']).config(['$stateProvider', '$urlRouterProvider', '$mdThemingProvider', function ($stateProvider, $urlRouterProvider, $mdThemingProvider) {

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
        resolve    : {
            requireNoAuth: function ($state, Auth) {
                return Auth.$requireAuth().then(function (Auth) {
                    $state.go('home');
                }, function (error) {
                    return;
                });
            }
        }
//        controller : 'AuthCtrl'
    }).state('register', {
        url        : '/register',
        templateUrl: 'partials/templates/register.tmpl.html',
        resolve    : {
            requireNoAuth: function ($state, Auth) {
                return Auth.$requireAuth().then(function (Auth) {
                    $state.go('home');
                }, function (error) {
                    return;
                });
            }
        }
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
    }).state('profile', {
        url        : '/profile',
        controller : 'ProfileCtrl',
        templateUrl: 'partials/templates/profile.tmpl.html',
        resolve    : {
            auth   : function ($state, Users, Auth) {
                return Auth.$requireAuth().catch(function () {
                    $state.go('home');
                });
            },
            profile: function (Users, Auth) {
                return Auth.$requireAuth().then(function (auth) {
                    return Users.getProfile(auth.uid).$loaded();
                });
            }
        }
    });
}]);

angular.module('same').service('ConnectService', ['$scope', '$firebaseObject', function ($scope, $firebaseObject) {
//    var ref = new Firebase("https://same-webapp.firebaseio.com");
}]);
angular.module('same').constant('FirebaseUrl', 'https://same-webapp.firebaseio.com/');
