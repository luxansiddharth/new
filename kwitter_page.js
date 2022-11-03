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
   room_name = localStorage.getItem("room_name");

function send()
{
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            Buy:0
      });
      document.getElementById("msg").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
       console.log(firebase_message_id);
       console.log(message_data);

       Name=message_data['name'];
       message=message_data['message'];
      like=message_data['like'];
  namewithtag="<h4> "+ Name +"<img class='user_tick' src='tick.png'>";
  messagewithtag="<h4 class='message_h4'>" + message + "</h4>";
likebutton="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updatelike(this.id)'>";
 span_with_tag = "Buy: "+ like +"</span></button><hr>";
 row=namewithtag+messagewithtag+likebutton+span_with_tag;
 document.getElementById("output").innerHTML += row;


      } });  }); }
getData();



function updatelike(message_id)
{
      console.log("clicked on like button-"+message_id);
      button_id=message_id;
      likes=document.getElementById(button_id).value;
      updated_likes= Number(likes)+1;
      console.log(updated_likes);
      firebase.database().ref(room_name).child(message_id).update({
             like : updated_likes
            
});
}
function logout()
      {
            localStorage.removeItem("user_name");
            localStorage.removeItem("room_name");
            window.location="index.html";
      }

