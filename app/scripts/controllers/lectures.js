'use strict';

angular.module('moocpocApp')
  .controller('LecturesCtrl', function ($scope, Lectures) {
    $scope.lectures = Lectures.query(
    	function(lectures) {
				$scope.selectedLecture = lectures[0];
			} );

    $scope.setLecture = function(lecture) {
    	$scope.selectedLecture = lecture;
    };

    $scope.setLecture($scope.lectures[0]);
    console.log($scope.lectures[0]);
  });