"use strict";

angular.module('same').controller("AuthCtrl", ["AuthService","$state",function (AuthService, $state) {
    var auth = this;
    auth.user = {
        'email': '',
        'password':''
    };

    auth.login = function() {
        AuthService.$authWithPassword(auth.user).then(function (auth) {
            $state.go('home');
        }, function (error) {
            auth.error = error;
        });
    };

    auth.registerUser = function() {
        AuthService.$createUser(auth.user).then(function (user) {
            auth.login();
        }, function (error) {
            auth.error = error;
        });
    };
}]);