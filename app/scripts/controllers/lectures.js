'use strict';

angular.module('moocpocApp')
  .controller('LecturesCtrl', function ($scope, Lectures) {
    $scope.lectures = Lectures.query();
  });