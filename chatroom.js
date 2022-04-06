const firebaseConfig = {
    apiKey: "AIzaSyDAy3htEVNlQXVxLkpkdvwTiC01390I-cY",
    authDomain: "my-independent-app-7f96f.firebaseapp.com",
    databaseURL: "https://my-independent-app-7f96f-default-rtdb.firebaseio.com",
    projectId: "my-independent-app-7f96f",
    storageBucket: "my-independent-app-7f96f.appspot.com",
    messagingSenderId: "510669464918",
    appId: "1:510669464918:web:3d33fd283a56c574bee2f7"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//YOUR FIREBASE LINKS
room_name = localStorage.getItem("Room_Name");
user_name=localStorage.getItem("User-name")
document.getElementById("rm_nm").innerHTML = room_name;
function send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
           
    })
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("Messages").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
          name = message_data['name'];
          message = message_data['message'];
          name_with_tag = "<h4>"+ name +"<img class='user_tick' src='tick.png'></h4>";
          message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
          row= name_with_tag + message_with_tag
          document.getElementById("Messages").innerHTML += row
          
//Start code
function back(){
    window.location = 'chathub.html'
}
//End code
    } });  }); }
getData();
function back(){
    window.location = 'chathub.html'
}



