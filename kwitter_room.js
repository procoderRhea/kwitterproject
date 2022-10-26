
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDgyCkyknKbCpEROqPNqbeE7PvhWzgrrjs",
      authDomain: "kwitter-studentactivity.firebaseapp.com",
      databaseURL: "https://kwitter-studentactivity-default-rtdb.firebaseio.com",
      projectId: "kwitter-studentactivity",
      storageBucket: "kwitter-studentactivity.appspot.com",
      messagingSenderId: "420512122362",
      appId: "1:420512122362:web:cd83aab9d846dd11795043"
    };
    
    // Initialize Firebase
firbase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = "childKey";
      //Start code

      //End code
      });});}
getData();
