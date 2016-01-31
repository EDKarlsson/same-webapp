"use strict";

angular.module('same').factory('HttpService', ['$http', function ($http) {


    var getPictures = function () {
        $http.get('https://web-url.some.ext').then(function (response, data) {
            console.log(response);
            var dataArray = data.urls;
            return dataArray;
        });
    };


    var photoList = [
        'img/events/2015/05.04.2015_same_spaghetti_bridge_00001.jpg',
        'img/events/2015/05.04.2015_same_spaghetti_bridge_00002.jpg',
        'img/events/2015/02.25.2015_society_women_engineers_calpoly.jpg',
        'img/events/outreach/02.25.2015_student_outreach_trabuco.jpg',
        'img/field_trips/10.24.2015_field_trip_flyer.jpg',
        'img/group/2015_award_acceptance_nathan_sharifrazi.jpg',
        'img/group/2015_same_group_00001.jpg',
        'img/logos/2015_SAME_logo.jpg'];

    var meetings = ['img/meetings/2015_same_meetings_00001.jpg',
        'img/meetings/2015_same_meetings_00002.jpg',
        'img/meetings/2015_same_meetings_00003.jpg'];

    var golfTourney = [
        'img/events/golf_tournament/09.11.15_same_gold_tournament_00001.jpg',
        'img/events/golf_tournament/09.11.15_same_gold_tournament_00002.jpg',
        'img/events/golf_tournament/09.11.15_same_gold_tournament_00003.jpg',
        'img/events/golf_tournament/09.11.15_same_gold_tournament_00004.jpg'];

    var studyGroup = ['img/group/2015_same_perez_study_groups_00001.jpg',
        'img/group/2015_same_perez_study_groups_00002.jpg',
        'img/group/2015_same_perez_study_groups_00003.jpg',
        'img/group/2015_same_perez_study_groups_00004.jpg',
        'img/group/2015_same_perez_study_groups_00005.jpg'];


    var imageObject = function () {

        imageObject();
        var images = [];
        var imgJson = $http.get('../../../lib/json/images.json');
        var bucket = $http.get('../../../lib/json/bucket.json');

        this.urlArray = [];

        this.getImage = function (resourceUrl, img) {
            $http({
                method: 'GET',
                url: resourceUrl + img
            }).then(function (response, data) {
                console.log(response);
                return data;
            }, function errorCallback(response) {
                console.log(response);
            });
        };


        this.getAllImages = function () {
            var index;
            var arrayLength = this.urlArray.length;
            var imgObject;
            if (arrayLength < 1) {
                return null;
            }
            for (index = 0; index < arrayLength; index++) {
                imgObject = this.getImage(bucket.url.toString(), this.urlArray[index]);
                images.push(imgObject);
            }
        };
    };


    return {
        getPictures: getPictures
    };
}]);


