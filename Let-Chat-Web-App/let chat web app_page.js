var firebaseConfig = {
      apiKey: "AIzaSyDC_bWF-oZnlXwuaSvXK2nXmlH8G4pNLCs",
      authDomain: "kwiter-379e7.firebaseapp.com",
      databaseURL: "https://kwiter-379e7-default-rtdb.firebaseio.com",
      projectId: "kwiter-379e7",
      storageBucket: "kwiter-379e7.appspot.com",
      messagingSenderId: "291183775253",
      appId: "1:291183775253:web:f72d48805a2cbf6791c81c"
    };
    
    kwitter
    firebase.initializeApp(firebaseConfig);
   

    function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") { firebase_message_id = childKey; message_data = childData;
      console.log(firebase_message_id);
       console.log(message_data);
        var name = message_data['name']; 
        message = message_data['message']; 
        like = message_data['like'];
         name_with_tag = `<h4> name<img class='user_tick' src='tick.png'></h4>`; 
         message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
         like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
          span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
           row = name_with_tag + message_with_tag +like_button + span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>"; row = name_with_tag + message_with_tag +like_button + span_with_tag;
            document.getElementById("output").innerHTML += row; } }); }); } getData();
    function updateLike(message_id) { console.log("clicked on like button - " + message_id); button_id = message_id; likes = document.getElementById(button_id).value; updated_likes = Number(likes) + 1; console.log(updated_likes); firebase.database().ref(room_name).child(message_id).update({ like : updated_likes }); } function logout() { localStorage.removeItem("user_name"); localStorage.removeItem("room_name"); window.location.replace("index.html"); }
    function send() { msg = document.getElementById("msg").value; firebase.database().ref(room_name).push({ name:user_name, message:msg, like:0 }); document.getElementById("msg").value = "";}
    function logout()
     { localStorage.removeItem("user_name"); 
     localStorage.removeItem("room_name");
      window.location.replace("index.html");
   }