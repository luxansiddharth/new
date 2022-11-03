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
  function adduser()
{
    user_name=document.getElementById("user_name").value;
firebase.database().ref("/").child(user_name).update({
    purpose:"adding user"
});
}