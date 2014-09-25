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

app.service('sharedProperties', function() {
    var chosen = "sup";
    var linkNum = 0;
    return {
        getProperty: function() {
            return chosen;
        },
        setProperty: function(value) {
            chosen = value;
        },
        incrLink: function() {
            linkNum = linkNum + 1;
        },
        getLinkNum: function() {
            return linkNum;
        }
    }
});
