<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.18.0/firebase-app.js"></script>

<!-- create a new firebase db -->
<script src="https://www.gstatic.com/firebasejs/7.18.0/firebase-database.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/7.18.0/firebase-analytics.js"></script>

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAmN9Uf9wkE_eFCkLwEVF9fntMEsSy0ppY",
    authDomain: "chatdemo-c3281.firebaseapp.com",
    databaseURL: "https://chatdemo-c3281.firebaseio.com",
    projectId: "chatdemo-c3281",
    storageBucket: "chatdemo-c3281.appspot.com",
    messagingSenderId: "236170473430",
    appId: "1:236170473430:web:2c85956dc17fe17424be77",
    measurementId: "G-K6HZL9Z62D"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


  var myName = prompt("Enter your name: ");


  function sendMessage() {
    var message  = document.getElementById('message').value;

    firebase.database().ref("messages").push().set({
        "sender":   myName,
        "message":  message,
    });

    // prevent form from submitting 
    return false;
  }


  // listen for incoming message
  firebase.database().ref("messages").on("child_added", function(snapshot){
    var html = "";
    html += "<li id='messages-" + snapshot.key + "'>";

        // show delete button if message is sent by me
        if (snapshot.val().sender == myName) {
            html += "<button data-id='" + snapshot.key + "' onclick='deleteMessage(this);'>"
                html += "Delete";
            html += "</button>"
        }
        html += snapshot.val().sender + ": " + snapshot.val().message;
    html += "</li>";

    document.getElementById("messages").innerHTML += html;
  });

  function deleteMessage(self) {
    var messageId = self.getAttribute("data-id");

    // delete message
    firebase.database().ref("messages").child(messageId).remove();
  }

  // attach listener of delete
  firebase.database().ref("messages").on("child_removed", function(snapshot) {
    document.getElementById("messages-" + snapshot.key).innerHTML = "<font style='color:red'><i>This message has been removed</i></font>";
  });
</script>

<form onsubmit="return sendMessage();">
  <input id="message" placeholder="Enter Message" autocomplete="off">
  <input type="submit">
</form>


<!-- create a list -->
<ul id="messages">
</ul>