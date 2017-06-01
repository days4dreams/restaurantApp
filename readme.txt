read me...

Created a new Firebase database, instance and new project.
Added Firebase to Web App
Applied config object along with firebase.initializeApp(config) to main.js file.
Connected with the database using var database = firebase.database();
NBs rules set for read and write to the database.

Created an empty object using object literal notation named ‘reservationData’; populated with user input.
App stores two types of reservation data for users: name and day information.
Updates the ‘name’ property of the ‘reservationData’ object when the user submits the form.
Added an event listener for when the user submits the form.
Prevent the default action for a form submit so that the page won't refresh.
Add the name the user entered to the ‘reservationData’ object.
Gets the value of the ‘.reservation-name’ input using jQuery's val() method. Value updates the ‘name’ property of the ‘reservationData’ object.
Defined a property ‘day’ on ‘reservationData’ object, which will have the value of the selected options text.
Updates the value of the property ‘day’ on ‘reservationData’ object to have a value of the option's text.

Posts this reservation information to Firebase database within the form-submit event handler:
Creates a section for reservations data in database.
POST ‘reservationData’ object to Firebase database using Firebase's push() method.

On initial load of application and with each reservation page is updated using Handlebars template.
Function ‘getReservations’ runs after form-submit event. Listens for changes to Firebase database using ‘value’ event.
Handlebars template displays reservation.

Defined the callback used by the Google Maps API to initialize the app's map.
function initMap() {}
Using the Google Maps’ Map constructor to create a map, added styling.
Uses  Marker constructor to add a marker to map for Deli location.