
/*  app.js  */

// create the module and name it eweekApp
var app = angular.module('california', ['ngRoute']);

// configure our routes
app.config(function($routeProvider) {
	$routeProvider

		.when('/:filter', {
			templateUrl : 'pages/all-places.html',
			controller  : 'PlacesCtrl'
		}).

		when('/contact', {
   		    templateUrl: 'pages/contact.html',
   		    controller: 'ContactCtrl'
   		}).

		otherwise({
			redirectTo : ''
		});
});

