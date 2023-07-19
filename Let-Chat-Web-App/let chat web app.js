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
  




function addUser() {
user_name = document.getElementById("user_name").value;
localStorage.setItem("user_name", user_name);
window.location = "let chat web app_room.html";
}