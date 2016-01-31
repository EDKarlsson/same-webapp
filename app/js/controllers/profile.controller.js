"use strict";

angular.module('same').controller("ProfileCtrl", function ($state, md5, AuthService, profile) {
    var profileCtrl     = this;
    profileCtrl.profile = profile;

    profileCtrl.updateProfile = function () {
        profileCtrl.profile.emailHash = md5.createHash(AuthService.password.email);
        profileCtrl.profile.$save();
    };
});