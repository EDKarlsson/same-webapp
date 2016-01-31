"use strict";

angular.module('same').factory('AuthService', ['$firebaseAuth', 'FirebaseUrl',function ($firebaseAuth, FirebaseUrl) {
    var ref = new Firebase(FirebaseUrl);
    var authentication = $firebaseAuth(ref);

    return authentication;
}]);