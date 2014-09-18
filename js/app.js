/*  app.js  */

// create the module and name it eweekApp
var app = angular.module('california', ['ngRoute']);

// configure our routes
app.config(function($routeProvider) {
	$routeProvider

		.when('/contact', {
   		    templateUrl: 'partials/contact.html',
   		    controller: 'ContactCtrl'
   		})

		.when('/:filter', {
			templateUrl : 'partials/all-places.html',
			controller  : 'PlacesCtrl'
		}).

		otherwise({
			redirectTo : '/'
		});
});
