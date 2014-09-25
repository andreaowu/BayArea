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
            "link": "missionpeak",
            "city": "Fremont",
            "address": "Stanford Ave E, Fremont, CA 94539",
            "type": "hiking",
            "description": "2500+ feet in elevation, Mission Peak is a great place to go for an upwards hike",
            "pic": "pic/chabot.jpg"},
        {"name": "Falafel Drive-In",
            "link": "falafeldrivein",
            "city": "San Jose",
            "address": "2301 Stevens Creek Blvd, San Jose, CA 95128",
            "type": "food",
            "description": "This place got me to start eating falafels; it's that good! Get the falafel and banana milk shake. It's great!",
            "pic": "tbd"},
        {"name": "Aberdeen Cafe",
            "link": "aberdeen",
            "city": "Fremont",
            "address": "46831 Warm Springs Blvd, Fremont, CA 94539",
            "type": "food",
            "description": "Delicious Hong-Kong style food! The wait during lunch is long though, so come early or late. Check out my Yelp review to see what to order!",
            "pic": "pic/chabot.jpg"},
        {"name": "Gong Cha",
            "link": "gongcha",
            "city": "Fremont",
            "address": "46827 Warm Springs Blvd #101, Fremont, CA 94539",
            "type": "food",
            "description": "This place has Asian drinks, also known as boba. Must try boba if you're around the area!",
            "pic": "tbd"},
        {"name": "Central Park",
            "link": "centralpark",
            "city": "Fremont",
            "address": "Lake Elizabeth Fremont, CA 94538",
            "type": "outdoors",
            "description": "Central park has many playgrounds, and a lake with a 2-mile path around it. It's a great place to have a picnic, BBQ, or go for a run.",
            "pic": "tbd"},
        {"name": "Back A Yard Carribbean American Grill",
            "link": "backayard",
            "city": "San Jose",
            "address": "0 N Market St, San Jose, CA 95113",
            "type": "food",
            "description": "Delicious Jamaican food in downtown San Jose. The meat is tender, and they give huge portions.",
            "pic": "tbd"},
        {"name": "Angelou's Mexican Grill",
            "link": "angelous",
            "city": "San Jose",
            "address": "21 N 2nd St, San Jose, CA 95113",
            "type": "food",
            "description": "Best Mexican food I've had ever. The meat is so flavorful, and the sauces they provide are great!",
            "pic": "tbd"},
        {"name": "California's Great America",
            "link": "greatamerica",
            "city": "San Jose",
            "address": "4701 Great America Pkwy, Santa Clara, CA 95054",
            "type": "outdoors",
            "description": "One of the few amusement parks around the area, Great America's fun to go to if you like roller coasters!",
            "pic": "tbd"},
        {"name": "Six Flags Marine World",
            "link": "marineworld",
            "city": "Berkeley",
            "address": "1001 Fairgrounds Dr, Vallejo, CA 94589",
            "type": "outdoors",
            "description": "If you enjoy really cool roller coasters, come here for the day. It's fun!",
            "pic": "tbd"},
        {"name": "Ici Ice Cream",
            "link": "ici",
            "city": "Berkeley",
            "address": "2948 College Ave, Berkeley, CA 94705",
            "type": "food",
            "description": "Homemade ice cream and homemade cones, this place has quality ice cream with really interesting flavors.",
            "pic": "tbd"},
        {"name": "CREAM",
            "link": "cream",
            "city": "Berkeley",
            "address": "2399 Telegraph Ave, Berkeley, CA 94704",
            "type": "food",
            "description": "Warm cookies fresh out of the oven combined with delicious ice cream, who wouldn't want an ice cream sandwich like that?!",
            "pic": "tbd"},
        {"name": "Bangkok Thai",
            "link": "bangkokthai",
            "city": "Berkeley",
            "address": "1958 Shattuck Ave, Berkeley, CA 94704",
            "type": "food",
            "description": "Berkeley has really good Thai food, and this is one of my favorite places to get it!",
            "pic": "tbd"}

    ];

    $scope.changeChosen = function(changeTo) {
        sharedProperties.setProperty(changeTo);
    };

    $scope.loc = sharedProperties.getProperty;

    $scope.link = sharedProperties.getLinkNum;

    $scope.incr = function() {
        sharedProperties.incrLink();
    };

});

app.controller('ContactCtrl', function($scope) {
});
