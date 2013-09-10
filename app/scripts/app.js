'use strict';

angular.module('moocpocApp', ['moocpocServices','ngSanitize'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/lectures', {
        templateUrl: 'views/lectures.html',
        controller: 'LecturesCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
