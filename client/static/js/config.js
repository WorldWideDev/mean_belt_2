var myApp = angular.module('myApp', ['ngRoute'])
console.log('in angular config')
myApp.config(function ($routeProvider){
	$routeProvider
	.when('/home', {
		templateUrl: 'partials/home.html',
		controller: 'HomeController',
		controllerAs: 'HC'
	})
	.when('/new_question', {
		templateUrl: 'partials/question.html',
		controller: 'QuestionController',
		controllerAs: 'QC'
	})
	.when('/lets_play', {
		templateUrl: 'partials/play.html',
		controller: 'PlayController',
		controllerAs: 'PC'
	})
	.when('/home/:_id', {
		templateUrl: 'partials/home.html',
		controller: 'HomeController',
		controllerAs: 'HC'
	})
	.otherwise({
		redirectTo: '/home'
	})
})