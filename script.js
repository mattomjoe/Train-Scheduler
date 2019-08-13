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

  // Variable that provides reference to database
  var dataRef = firebase.database();

  // Initial values
  var trainName = "";
  var destination = "";
  var firstTrainTime = "";
  var frequency = 0;
  // var nextArrival = 0;
  // var minutesAway = 0;

  // Capture Button Click
  $("#submit-new-train").on("click", function(event) {
    event.preventDefault();

    console.log("you clicked submit!");

    // Captures the data entered by the user in the form
    var trainName = $("#train-name-input").val().trim();
    var destination = $("#destination-input").val().trim();
    var firstTrainTime = $("#first-train-time").val().trim();
    var frequency = $("#frequency-input").val().trim();

    var newTrain = {
        trainName: trainName,
        destination: destination,
        firstTrainTime: firstTrainTime,
        frequency: frequency,
        // nextArrival: nextArrival,
        // minutesAway: minutesAway,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    };

    dataRef.ref().push(newTrain);

    console.log(newTrain.trainName);
    console.log(newTrain.destination);
    console.log(newTrain.firstTrainTime);
    console.log(newTrain.frequency);

    alert("New train successfully added");

    // Reset/zero-out form fields

    $("#train-name-input").val("");
    $("#destination-input").val("");
    $("#first-train-time").val("");
    $("#frequency-input").val("");

  });

  
  /* database.ref().on("child_added", function(childSnapshot) {
    console.log(childSnapshot.val());

    var trainName = childSnapshot.val().trainName;
    var destination = childSnapshot.val().destination;
    var firstTrainTime = childSnapshot.val().firstTrainTime;
    var frequency = childSnapshot.val().frequency;

    console.log(trainName);
    console.log(destination);
    console.log(firstTrainTime);
    console.log(frequency);



  }); */

});