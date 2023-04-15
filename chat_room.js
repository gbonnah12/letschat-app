const firebaseConfig = {
    apiKey: "AIzaSyBul0qE3AyYnqluJidmK6yDZug3J5Zxxuw",
    authDomain: "letschatapp-75042.firebaseapp.com",
    databaseURL: "https://letschatapp-75042-default-rtdb.firebaseio.com",
    projectId: "letschatapp-75042",
    storageBucket: "letschatapp-75042.appspot.com",
    messagingSenderId: "374885687160",
    appId: "1:374885687160:web:03c4c3b840d2b7735a728d"
  }
  firebase.initializeApp(firebaseConfig);

  function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({

      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - +" + Room_names);
      row = "<div class ='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();
function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name", name);
 window.location = "chat_page.html";
}
function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({

      });

      localStorage.setItem("room_name", room_name);

      window.location = "chat_page.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - +" + Room_names);
      row = "<div class ='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();
function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name", name);
 window.location = "chat_page.html";
}
function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
      window.location = "index.html";
}
