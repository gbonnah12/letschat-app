const firebaseConfig = {
    apiKey: "AIzaSyBul0qE3AyYnqluJidmK6yDZug3J5Zxxuw",
    authDomain: "letschatapp-75042.firebaseapp.com",
    databaseURL: "https://letschatapp-75042-default-rtdb.firebaseio.com",
    projectId: "letschatapp-75042",
    storageBucket: "letschatapp-75042.appspot.com",
    messagingSenderId: "374885687160",
    appId: "1:374885687160:web:03c4c3b840d2b7735a728d"
  };
  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
 } });  }); }
getData();