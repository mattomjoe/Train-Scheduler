$(document).ready(function () { // ALWAYS INCLUDE!!

    console.log("Good to here!");

  // Web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDLekp5FMh10mfvzpAMwMfakS5XFQ8Tui4",
    authDomain: "mjosephbc2019.firebaseapp.com",
    databaseURL: "https://mjosephbc2019.firebaseio.com",
    projectId: "mjosephbc2019",
    storageBucket: "mjosephbc2019.appspot.com",
    messagingSenderId: "727957928932",
    appId: "1:727957928932:web:92bf57c5a753e858"
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

    console.log("you clicked submit!");

    // Store and retrieve most recent data added

    var trainName = $("#train-name-input").val().trim();
    var destination = $("#destination-input").val().trim();
    var firstTrainTime = $("#first-train-time").val().trim();
    var frequency = $("#frequency-input").val().trim();

    dataRef.ref().push({
        trainName: trainName,
        destination: destination,
        frequency: frequency,
        nextArrival: nextArrival,
        minutesAway: minutesAway,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    });

  });

});