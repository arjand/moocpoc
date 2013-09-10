'use strict';

/* Services */
angular.module('moocpocServices', ['ngResource']).
	factory('Lectures', function($resource){
		return $resource('lectures.json', {}, {
			query: {method:'GET', params:{},
							isArray: true}
			});
		});
