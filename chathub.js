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
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("User-name")
document.getElementById("user_name").innerHTML= "Welcome "+user_name;
function addRoom(){
    room_name=document.getElementById("room_name").value;
    localStorage.setItem("Room_Name", room_name);
    firebase.database().ref('/').child(room_name).update({
          purpose: " adding_room_name"
    })
    window.location="chatroom.html"
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    row="<div class='room_name' id="+Room_names+" onclick='RedirectRoomName(this.id)'>#"+ Room_names +"</div><hr>";
    document.getElementById("output").innerHTML+= row;
    //End code
    });});}
getData();
function RedirectRoomName(name){
    localStorage.setItem("room_name", name);
    window.location="chatroom.html";
}
function tohome(){
    window.location = "home.html"
}

