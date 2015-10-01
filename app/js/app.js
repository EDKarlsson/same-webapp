"use strict";
angular.module('same', ['ngMaterial', 'ui.bootstrap', 'ui.router', 'firebase', 'ngMessages']).config(['$stateProvider', '$urlRouterProvider', '$mdThemingProvider', function ($stateProvider, $urlRouterProvider, $mdThemingProvider) {

    $mdThemingProvider.theme('default').primaryPalette('deep-orange');
    $mdThemingProvider.theme('default').accentPalette('blue-grey');

    $mdThemingProvider.theme('default').warnPalette('red');

    $stateProvider.state('home', {
            url: '',
            templateUrl: 'partials/home.html',
            controller: 'MainCtrl'
        }
    ).state('login', {
            url: '/login',
            templateUrl: 'partials/login.html',
            controller: 'UserCtrl'
        }
    ).state('contact', {
            url: '/contact',
            templateUrl: 'partials/contact.html',
            controller: 'MainCtrl'
        });
}]);

angular.module('same').service('ConnectService', ['$scope', '$firebaseObject', function ($scope, $firebaseObject) {
//    var ref = new Firebase("https://same-webapp.firebaseio.com");

}]);



angular.module('same').controller('MainCtrl', ['$scope', function ($scope, $mdDialog) {
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
    $scope.showAdvanced = function (ev) {
        $mdDialog.show({
            controller: DialogController,
            templateUrl: 'dialog1.tmpl.html',
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

angular.module('same').controller('DialogController', function ($scope, $mdDialog) {
    $scope.hide = function () {
        $mdDialog.hide();
    };
    $scope.cancel = function () {
        $mdDialog.cancel();
    };
    $scope.answer = function (answer) {
        $mdDialog.hide(answer);
    };
});