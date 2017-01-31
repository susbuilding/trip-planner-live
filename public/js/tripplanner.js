var $selectedHotel = $('#hotel-choices');
hotels.forEach(function(hotel) {
    $selectedHotel.append("<option>" + hotel.name + "</option>")
})

var $selectedRestaurant = $('#restaurant-choices');
restaurants.forEach(function(restaurant) {
    $selectedRestaurant.append("<option>" + restaurant.name + "</option>")
})

var $selectedActivity = $('#activity-choices');
activities.forEach(function(activity) {
    $selectedActivity.append("<option>" + activity.name + "</option>")
})

var hotelButton = $selectedHotel.next();
hotelButton.on('click', function(){
    $('#hotel-itinerary').append("<span class='title'>" + $selectedHotel.val() + "</span>")
    $('#hotel-itinerary').append("<button class='btn btn-xs btn-danger remove btn-circle'>x</button>");
})

var restaurantButton = $selectedRestaurant.next();
restaurantButton.on('click', function(){
    $('#restaurant-itinerary').append("<span class='title'>" + $selectedRestaurant.val() + "</span>")
    $('#restaurant-itinerary').append("<button class='btn btn-xs btn-danger remove btn-circle'>x</button>");
})

var activityButton = $selectedActivity.next();
activityButton.on('click', function(){
    $('#activity-itinerary').append("<span class='title'>" + $selectedActivity.val() + "</span>");
    $('#activity-itinerary').append("<button class='btn btn-xs btn-danger remove btn-circle'>x</button>");
})


