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
                location:'Eden, UT',
                backgroundURL:'/images/snowboard-3.jpg',
                videoURL: 'https://vimeo.com/115287029',
                description: 'Hello world. This is my first angular project. It is really powerful, as I&apos;m demonstrating here.',
			},
			{
				name:'Herald Jones',
				title:'Snowbasin Winter 2014',
                date:'02/05/2014',
                location:'Mountain Green, UT',
                backgroundURL:'/images/snowboard-3.jpg',
                videoURL: 'https://player.vimeo.com/video/128737534',
                description: 'Hello world. This is my first angular project. It is really powerful, as I&apos;m demonstrating here.'
			},
            {
				name:'Markus Schuette',
				title:'Powder Mountain',
                date:'05/05/2015',
                location:'Eden, UT',
                backgroundURL:'/images/snowboard-3.jpg',
                videoURL: '',
                description: 'Hello world. This is my first angular project. It is really powerful, as I&apos;m demonstrating here.'
			},
			{
				name:'Jim Jones',
				title:'Snowbasin Winter 2014',
                date:'02/05/2014',
                location:'Mountain Green, UT',
                backgroundURL:'/images/snowboard-3.jpg',
                videoURL: '',
                description: 'Hello world. This is my first angular project. It is really powerful, as I&apos;m demonstrating here.'
			},
            {
				name:'Laring Situes',
				title:'Canyons Ski Resort',
                date:'03/05/2015',
                location:'Park City, UT',
                backgroundURL:'/images/snowboard-3.jpg',
                videoURL: '',
                description: 'Hello world. This is my first angular project. It is really powerful, as I&apos;m demonstrating here.'
			},
			{
				name:'Tulip Lusk',
				title:'Brighton Jam',
                date:'09/05/2015',
                location:'Cottonwood Canyon, UT',
                backgroundURL:'/images/snowboard-3.jpg',
                videoURL: '',
                description: 'Hello world. This is my first angular project. It is really powerful, as I&apos;m demonstrating here.'
			},
            {
                name: 'Papa Schuette',
                title: 'BBQ at Pow Mow',
                date: '03/23/15',
                location: 'PowMow Parking Lot',
                backgroundURL:'/images/snowboard-3.jpg',
                videoURL: '',
                description: 'Hello world. This is my first angular project. It is really powerful, as I&apos;m demonstrating here.'
            }
            
		]
	}]
)

angular.module('custom-template').controller('teamController',
	[ '$scope'
	, '$window'
	, '$http'
	, function ($scope, $window, $http) {
		var team = this;

		team.person =[
			{
				name:'Kumar Titus',
                age:'05/05/2015',
                location:'Eden, UT',
                backgroundURL:'/images/snowboard-3.jpg',
                bio: 'Hello world. This is my first angular project. It is really powerful, as I&apos;m demonstrating here.',
			},
			{
				name:'Kumar Titus',
                age:'05/05/2015',
                location:'Eden, UT',
                backgroundURL:'/images/snowboard-3.jpg',
                bio: 'Hello world. This is my first angular project. It is really powerful, as I&apos;m demonstrating here.',
			},
            {
				name:'Kumar Titus',
                age:'05/05/2015',
                location:'Eden, UT',
                backgroundURL:'/images/snowboard-3.jpg',
                bio: 'Hello world. This is my first angular project. It is really powerful, as I&apos;m demonstrating here.',
			}
            
		]
	}]
)
