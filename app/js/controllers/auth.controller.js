"use strict";

angular.module('same').controller("AuthCtrl", ["AuthService","$state",function (AuthService, $state) {
    var authCtrl = this;
    authCtrl.user = {
        'email': '',
        'password':''
    };

    authCtrl.login = function() {
        AuthService.$authWithPassword(authCtrl.user).then(function (auth) {
            $state.go('home');
        }, function (error) {
            authCtrl.error = error;
        });
    };

    authCtrl.registerUser = function() {
        AuthService.$createUser(authCtrl.user).then(function (user) {
            authCtrl.login();
        }, function (error) {
            authCtrl.error = error;
        });
    };
}]);