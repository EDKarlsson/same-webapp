"use strict";

angular.module('same').controller('UserCtrl', ['$scope', '$firebaseObject', '$firebaseAuth', '$firebaseArray', function ($scope, $firebaseObject, $firebaseAuth, $firebaseArray) {
    var fireRef    = new Firebase('https://same-webapp.firebaseio.com');
    $scope.profile = $firebaseObject(fireRef.child('users'));
    $scope.authObj = $firebaseAuth(fireRef);
    $scope.user    = {
        name : '',
        email: ''
    };

    $scope.authObj.$createUser({
        email   : "my@email.com",
        password: "mypassword"
    }).then(function (userData) {
        console.log("User " + userData.uid + " created successfully!");

        return $scope.authObj.$authWithPassword({
            email   : "my@email.com",
            password: "mypassword"
        });
    }).then(function (authData) {
        console.log("Logged in as:", authData.uid);
    }).catch(function (error) {
        console.error("Error: ", error);
    });

    var list = $firebaseArray(fireRef);

    list.$add({foo: "bar"}).then(function (ref) {
        var id = ref.key();
        console.log("added record with id " + id);
        list.$indexFor(id); // returns location in the array
    });

    var obj = $firebaseObject(fireRef);

    obj.$bindTo($scope, "data").then(function () {
        console.log($scope.data); // { foo: "bar" }
        $scope.data.foo = "baz";  // will be saved to the database
        fireRef.set({foo: "baz"});  // this would update the database and $scope.data
    });

}]);

var user = {
    "name"   : "",
    "email"  : "",
    "address": {
        "street1": "",
        "street2": "",
        "city"   : "",
        "state"  : "",
        "zip"    : ""
    },
    "phone"  : ""
};
