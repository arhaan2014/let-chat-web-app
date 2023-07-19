

// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDC_bWF-oZnlXwuaSvXK2nXmlH8G4pNLCs",
      authDomain: "kwiter-379e7.firebaseapp.com",
      databaseURL: "https://kwiter-379e7-default-rtdb.firebaseio.com",
      projectId: "kwiter-379e7",
      storageBucket: "kwiter-379e7.appspot.com",
      messagingSenderId: "291183775253",
      appId: "1:291183775253:web:f72d48805a2cbf6791c81c"
    };
    
    
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name"); document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
    function addRoom() { room_name = document.getElementById("room_name").value; firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" }); localStorage.setItem("room_name", room_name); window.location = "let chat web app.html"; }




function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();





function getData() { firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; Room_names = childKey; console.log("Room Name - " + Room_names); row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; document.getElementById("output").innerHTML += row; }); }); }

getData();
function redirectToRoomName(name)
{

console.log(name);
localstorage.setItem("room_name", name); 
window.location = "let chat web app.html";}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
      }
      