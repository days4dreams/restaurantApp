$(function() {
$('#thumbnails').children('div').children('img');
$('#thumbnails').find('.thumbnail');
$('#thumbnails').children();
$('.thumbnail').parent().parent('#thumbnails'); 
$('.thumbnail').parent('div').next().children('.thumbnail');
$('#thumbnails div:last-child').prev().children('.thumbnail');
});
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDqlZe8pp-_xe38UowEm5vsc4yn2Bm4oG4",
    authDomain: "reservation-site-a047b.firebaseapp.com",
    databaseURL: "https://reservation-site-a047b.firebaseio.com",
    projectId: "reservation-site-a047b",
    storageBucket: "reservation-site-a047b.appspot.com",
    messagingSenderId: "415205676502"
  };
  firebase.initializeApp(config);

var database = firebase.database();

//click event, listens for user click on one of the list items in the Select a Day dropdown
//jQuery find the text on the clicked item using this keyword andassigned it to the property of day
//within the reservationData object
/*$('.reservation-day option').on('click', function(){
  reservationData.day = $('#reservation-day :selected').text();
});*/

//event listener for form submits, prevents default action of page refresh
//and captures the user entered input from the input field and assigns it to the name property
//of the reservationData object
$('.reservation-form').on('submit', function (e) {
	e.preventDefault();
    reservationData.day = $('#reservation-day :selected').text();
    reservationData.name = $('.reservation-name').val();
  	var reservationsReference = database.ref('reservations');
  //create a section for servations data in firebase database
 	reservationsReference.push(reservationData);
	//POST data to that section referenceToDatabase.push(objectToAdd);  
});


// Empty Object to store user data
var reservationData = {
};

//function to run after form submit; listens for changes to database
function getReservations() {
database.ref('reservations').on('value', function (results) {
  // Code excutes only when a value changes, hence value over click/submit
  //This goes to firebase database upon the change of a value and passes us back the information as results
  var allReservations = results.val();
  //get all reservations stored in the results we received back from Firebase
  $('.reservations').empty();
  //remove any current reservation information in the item
  
  for (reservation in allReservations) {
 var context = {
 name: allReservations[reservation].name,
 day: allReservations[reservation].day,
 reservationId: reservation
 };
 // Get the HTML from our Handlebars reservation template
      var source = $("#reservation-template").html();

      // Compile our Handlebars template
      var template = Handlebars.compile(source);

      // Pass the data for this reservation (context) into the template
      var reservationListItem = template(context);

      // Append newly created reservation to reservations list.
      $('.reservations').html(reservationListItem);

    }
});
}

getReservations();

// initialize the configuration of map
function initMap() {
  // use JS's built-in Navigator to get user's lat/lng coordinates
  navigator.geolocation.getCurrentPosition(function(position) {
    // create an object to store lat/lng data
    var tomLocation = {
  lat: 40.8054491, 
  lng: -73.9654415


    };

    // create a new instance of a map
    // configure map with options object
    var map = new google.maps.Map(document.getElementById('map'), {
      center: tomLocation,
      zoom: 10,
      scrollwheel: false
    });

    // use Marker constructor to add a marker to map
    var marker = new google.maps.Marker({
      position: tomLocation,
      map: map,
      title: 'Our Location'
    });

  });
}

initMap();
