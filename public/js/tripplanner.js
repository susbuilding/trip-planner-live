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
    var hotelItineraryItem = "<div class='itinerary-item'><span class='title'>" + $selectedHotel.val() + "</span>" +
        "<button class='btn btn-xs btn-danger remove btn-circle'>x</button></div>";
    $('#hotel-itinerary').append(hotelItineraryItem);
    //var hotelDeleteButton = $('#hotel-itinerary button');
    //console.log(hotelDeleteButton);
});

var restaurantButton = $selectedRestaurant.next();
restaurantButton.on('click', function(){
    var restaurantItineraryItem = "<div class='itinerary-item'><span class='title'>" + $selectedRestaurant.val() + "</span>" +
        "<button class='btn btn-xs btn-danger remove btn-circle'>x</button></div>";
    $('#restaurant-itinerary').append(restaurantItineraryItem);
});

var activityButton = $selectedActivity.next();
activityButton.on('click', function(){
    var activityItineraryItem = "<div class='itinerary-item'><span class='title'>" + $selectedActivity.val() + "</span>" +
        "<button class='btn btn-xs btn-danger remove btn-circle'>x</button></div>";
    $('#activity-itinerary').append(activityItineraryItem);


});

$('#itinerary').on('click', '.remove', function () {
  $(this).parent().remove();
  console.log('parent of this = ', $(this).parent().remove());
});

// var hotelDeleteButton = $('#hotel-itinerary');
// console.log(hotelDeleteButton);

$('#day-add').on('click', function(){
    var newCurrent = $('<button class="btn btn-circle day-btn">1</button>');
    $('.current-day').after(newCurrent);
    $('.current-day').removeClass('current-day');
    newCurrent.addClass('current-day');
})
