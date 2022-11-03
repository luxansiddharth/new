
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyBzRVE7uf_0jBD5eIVVj3MuAvcwnxiIg0Y",
      authDomain: "product-project-e2431.firebaseapp.com",
      databaseURL: "https://product-project-e2431-default-rtdb.firebaseio.com",
      projectId: "product-project-e2431",
      storageBucket: "product-project-e2431.appspot.com",
      messagingSenderId: "517040490734",
      appId: "1:517040490734:web:abf8b3873d5b6548a4cbff"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
   user_name = localStorage.getItem("user_name");
   document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

   function addRoom()
{
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      
       console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
         document.getElementById("output").innerHTML += row; });
       });
      }
getData();
function redirectToRoomName(name)
 {
       console.log(name);
       localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html"; 
      }

      function logout()
      {
            localStorage.removeItem("user_name");
            localStorage.removeItem("room_name");
            window.location="index.html";
      }