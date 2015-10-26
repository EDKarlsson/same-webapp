/***************************************************************
 * Created by dank on 10/21/15.
 * _____________________________________________________________
 *
 *
 ***************************************************************/

"use strict";

angular.module('same').controller('galleryCtrl', function ($scope) {

    $scope.photoList = [
        'img/events/2015/05.04.2015_same_spaghetti_bridge_00001.jpg',
        'img/events/2015/05.04.2015_same_spaghetti_bridge_00002.jpg',
        'img/events/2015/02.25.2015_society_women_engineers_calpoly.jpg',
        'img/events/outreach/02.25.2015_student_outreach_trabuco.jpg',
        'img/field_trips/10.24.2015_field_trip_flyer.jpg',
        'img/group/2015_award_acceptance_nathan_sharifrazi.jpg',
        'img/group/2015_same_group_00001.jpg',
        'img/logos/2015_SAME_logo.jpg'];

    $scope.meetings = ['img/meetings/2015_same_meetings_00001.jpg',
        'img/meetings/2015_same_meetings_00002.jpg',
        'img/meetings/2015_same_meetings_00003.jpg'];

    $scope.golfTourney = [
        'img/events/golf_tournament/09.11.15_same_gold_tournament_00001.jpg',
        'img/events/golf_tournament/09.11.15_same_gold_tournament_00002.jpg',
        'img/events/golf_tournament/09.11.15_same_gold_tournament_00003.jpg',
        'img/events/golf_tournament/09.11.15_same_gold_tournament_00004.jpg'];

    $scope.studyGroup = ['img/group/2015_same_perez_study_groups_00001.jpg',
        'img/group/2015_same_perez_study_groups_00002.jpg',
        'img/group/2015_same_perez_study_groups_00003.jpg',
        'img/group/2015_same_perez_study_groups_00004.jpg',
        'img/group/2015_same_perez_study_groups_00005.jpg'];
});


