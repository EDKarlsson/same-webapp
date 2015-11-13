"use strict";

angular.factory('AuthService', ['$firebaseAuth', 'FirebaseUrl',function ($firebaseAuth, FirebaseUrl) {
    var ref = new Firebase(FirebaseUrl);
    var authentication = $firebaseAuth(ref);

    return authentication;
}]);