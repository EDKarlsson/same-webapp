"use strict";

angular.module('same').controller('UserCtrl', ['$scope', '$firebaseObject', function ($scope, $firebaseObject) {
    var fireRef = new Firebase('https://same-webapp.firebaseio.com');
    $scope.profile = $firebaseObject(fireRef.child('users'));

    $scope.user = {
        title: 'Developer',
        email: 'ipsum@lorem.com',
        firstName: '',
        lastName: '',
        company: 'Google',
        address: '1600 Amphitheatre Pkwy',
        city: 'Mountain View',
        state: 'CA',
        biography: 'Loves kittens, snowboarding, and can type at 130 WPM.\n\nAnd rumor has it she bouldered up Castle Craig!',
        postalCode: '94043'
    };

}]);