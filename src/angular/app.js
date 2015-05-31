'use strict';
angular.module('custom-template', [
	//'ngRoute'
])

angular.module('custom-template').controller('vidController',
	[ '$scope'
	, '$window'
	, '$http'
	, function ($scope, $window, $http) {
		var video = this;

		video.cards =[
			{
				name:'Kumar Titus',
				title:'Powder Mountain',
                date:'05/05/2015',
                location:'Eden, UT'
			},
			{
				name:'Herald Jones',
				title:'Snowbasin Winter 2014',
                date:'02/05/2014',
                location:'Mountain Green, UT'
			},
            {
				name:'Kumar Titus',
				title:'Powder Mountain',
                date:'05/05/2015',
                location:'Eden, UT'
			},
			{
				name:'Herald Jones',
				title:'Snowbasin Winter 2014',
                date:'02/05/2014',
                location:'Mountain Green, UT'
			},
            {
				name:'Kumar Titus',
				title:'Powder Mountain',
                date:'05/05/2015',
                location:'Eden, UT'
			},
			{
				name:'Herald Jones',
				title:'Snowbasin Winter 2014',
                date:'02/05/2014',
                location:'Mountain Green, UT'
			}
            
		]
	}]
)
