app.controller('PlacesCtrl', function($scope, sharedProperties) {
	$scope.cities = 
		{"Fremont": ["food", "hiking", "outdoors"],
			"San Jose": ["food", "hiking"], 
			"Berkeley": ["food", "hiking"], 
			"San Francisco": ["food", "hiking", "museums", "outdoors"]
		};

	$scope.cityPic =
		{"Fremont": "img/chabot.jpg",
			"San Jose": "",
			"Berkeley": "",
			"San Francisco": ""
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
			"img": "tbd"},
		{"name": "Aberdeen Cafe",
			"city": "Fremont",
			"address": "46831 Warm Springs Blvd, Fremont, CA 94539",
			"type": "food",
			"description": "Delicious Hong-Kong style food! The wait during lunch is long though, so come early or late. Check out my Yelp review to see what to order!",
			"img": "tbd"},
		{"name": "Gong Cha",
			"city": "Fremont",
			"address": "46827 Warm Springs Blvd #101, Fremont, CA 94539",
			"type": "food",
			"description": "This place has Asian drinks, also known as boba. Must try boba if you're around the area!",
			"img": "tbd"},
		{"name": "Central Park",
			"city": "Fremont",
			"address": "Lake Elizabeth Fremont, CA 94538",
			"type": "outdoors",
			"description": "Central park has many playgrounds, and a lake with a 2-mile path around it. It's a great place to have a picnic, BBQ, or go for a run.",
			"img": "tbd"},
	];

	$scope.changeChosen = function(changeTo) {
		sharedProperties.setProperty(changeTo);
	};

	$scope.loc = sharedProperties.getProperty;

});

app.controller('ContactCtrl', function($scope) {
});
