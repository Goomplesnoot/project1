(function(){
    // Initialize Firebase
    const firebaseConfig = {
        apiKey: "AIzaSyBJ3YCjW6PRst7BtT78Taq7zEVXUSHRS7w",
        authDomain: "project1-395e9.firebaseapp.com",
        databaseURL: "https://project1-395e9-default-rtdb.firebaseio.com",
        projectId: "project1-395e9",
        storageBucket: "project1-395e9.appspot.com",
        messagingSenderId: "345798516120",
        appId: "1:345798516120:web:da2b25a13ff47b27681fed",
        measurementId: "G-VR840DSKNL"
      };
    firebase.initializeApp(config);
    
    var userDataRef = firebase.database().ref("UserData").orderByKey();
    userDataRef.once("value")
      .then(function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
          var key = childSnapshot.key;
          var childData = childSnapshot.val();              // childData will be the actual contents of the child
    
          var name_val = childSnapshot.val().Name;
          var id_val = childSnapshot.val().AssignedID;
          document.getElementById("name").innerHTML = name_val;
          document.getElementById("id").innerHTML = id_val;
      });
     });
    }());
