"use strict";
angular.module('same', ['ngMaterial', 'ui.bootstrap', 'ui.router', 'firebase', 'ngMessages']).config(['$stateProvider', '$urlRouterProvider', '$mdThemingProvider', function ($stateProvider, $urlRouterProvider, $mdThemingProvider) {

    $mdThemingProvider.theme('default').primaryPalette('red', {
        'default': '700'
    });
    $mdThemingProvider.theme('default').accentPalette('light-blue');

    $mdThemingProvider.theme('default').warnPalette('orange');
    $stateProvider.state('home', {
            url: '',
            templateUrl: 'partials/home.html',
            controller: 'MainCtrl'
        }
    ).state('login', {
            url: '/login',
            templateUrl: 'partials/login.html'
        }
    ).state('about', {
            url: '/about',
            templateUrl: 'partials/aboutUs.html'
        }).state('gallery', {
            url: '/gallery',
            templateUrl: 'partials/photo.gallery.html'

        });
}]);

angular.module('same').service('ConnectService', ['$scope', '$firebaseObject', function ($scope, $firebaseObject) {
//    var ref = new Firebase("https://same-webapp.firebaseio.com");

}]);

var DialogController = function ($scope, $mdDialog) {
    $scope.hide = function () {
        $mdDialog.hide();
    };
    $scope.cancel = function () {
        $mdDialog.cancel();
    };
    $scope.answer = function (answer) {
        $mdDialog.hide(answer);
    };
};


angular.module('same').controller('MainCtrl', ['$scope', '$mdDialog', function ($scope, $mdDialog) {
    $scope.testResponse = function () {
        console.log("Testing response");

    };


    $scope.status = '  ';
    $scope.showAlert = function (ev) {
        // Appending dialog to document.body to cover sidenav in docs app
        // Modal dialogs should fully cover application
        // to prevent interaction outside of dialog
        $mdDialog.show(
            $mdDialog.alert()
                .parent(angular.element(document.querySelector('#popupContainer')))
                .clickOutsideToClose(true)
                .title('This is an alert title')
                .content('You can specify some description text in here.')
                .ariaLabel('Alert Dialog Demo')
                .ok('Got it!')
                .targetEvent(ev)
        );
    };
    $scope.showConfirm = function (ev) {
        // Appending dialog to document.body to cover sidenav in docs app
        var confirm = $mdDialog.confirm()
            .title('Would you like to delete your debt?')
            .content('All of the banks have agreed to <span class="debt-be-gone">forgive</span> you your debts.')
            .ariaLabel('Lucky day')
            .targetEvent(ev)
            .ok('Please do it!')
            .cancel('Sounds like a scam');
        $mdDialog.show(confirm).then(function () {
            $scope.status = 'You decided to get rid of your debt.';
        }, function () {
            $scope.status = 'You decided to keep your debt.';
        });
    };
    $scope.showRegister = function (ev) {
        $mdDialog.show({
            controller: DialogController,
            templateUrl: 'partials/templates/register.tmpl.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true
        })
            .then(function (answer) {
                $scope.status = 'You said the information was "' + answer + '".';
            }, function () {
                $scope.status = 'You cancelled the dialog.';
            });
    };
    $scope.showLogin = function (ev) {
        $mdDialog.show({
            controller: DialogController,
            templateUrl: 'partials/templates/login.tmpl.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true
        })
            .then(function (answer) {
                $scope.status = 'You said the information was "' + answer + '".';
            }, function () {
                $scope.status = 'You cancelled the dialog.';
            });
    };
}]);
