app.controller('PlacesCtrl', function($scope, sharedProperties) {
	$scope.cities = 
		{"Fremont": ["food", "hiking"],
			"San Jose": ["food", "hiking"], 
			"Berkeley": ["food", "hiking"], 
			"San Francisco": ["food", "hiking", "museums", "outdoors"]
		};

	$scope.places = [
		{"name": "Mission Peak",
			"city": "Fremont",
			"address": "Stanford Ave E, Fremont, CA 94539",
			"type": "hiking",
			"description": "2500+ feet in elevation, Mission Peak is a great place to go for an upwards hike",
			"img": "tbd"},
		{"name": "Falafel Drive-In",
			"city": "San Jose",
			"address": "2301 Stevens Creek Blvd, San Jose, CA 95128",
			"type": "food",
			"description": "This place got me to start eating falafels; it's that good! Get the falafel and banana milk shake. It's great!",
			"img": "tbd"}
	];

	$scope.changeChosen = function(changeTo) {
		sharedProperties.setProperty(changeTo);
	};

	$scope.loc = sharedProperties.getProperty;

});

app.controller('ContactCtrl', function($scope) {
});
