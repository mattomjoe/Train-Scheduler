$(document).ready(function () { // ALWAYS INCLUDE!!

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDLekp5FMh10mfvzpAMwMfakS5XFQ8Tui4",
    authDomain: "mjosephbc2019.firebaseapp.com",
    databaseURL: "https://mjosephbc2019.firebaseio.com",
    projectId: "mjosephbc2019",
    storageBucket: "",
    messagingSenderId: "727957928932",
    appId: "1:727957928932:web:c7b27bc86c0d3da7"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var dataRef = firebase.database();

  // Initial values
  var trainName = "";
  var destination = "";
  var frequency = 0;
  var nextArrival = 0;
  var minutesAway = 0;

  // Capture Button Click
  $("#submit-new-train").on("click", function(event) {
    event.preventDefault();

    // Store and retrieve most recent data added

    trainName = $("#train-name-input").val().trim();
    destination = $("#destination-input").val().trim();
    frequency = $("#frequency-input").val().trim();
    nextArrival = 
    minutesAway = 


  })

});