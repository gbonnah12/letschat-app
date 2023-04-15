// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyBul0qE3AyYnqluJidmK6yDZug3J5Zxxuw",
    authDomain: "letschatapp-75042.firebaseapp.com",
    databaseURL: "https://letschatapp-75042-default-rtdb.firebaseio.com",
    projectId: "letschatapp-75042",
    storageBucket: "letschatapp-75042.appspot.com",
    messagingSenderId: "374885687160",
    appId: "1:374885687160:web:03c4c3b840d2b7735a728d"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



