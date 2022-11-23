

/* Your web app's Firebase configuration */
var firebaseConfig = {
  apiKey: "AIzaSyDVXPqEEVGfslWei8SRvlsdUzBBj4Bhr20",
  authDomain: "gpstrackmobiledi-1523763304572.firebaseapp.com",
  databaseURL: "https://gpstrackmobiledi-1523763304572.firebaseio.com",
  projectId: "gpstrackmobiledi-1523763304572",
  storageBucket: "gpstrackmobiledi-1523763304572.appspot.com",
  messagingSenderId: "472979733106",
  appId: "1:472979733106:web:fceaf7f9b91447d1c920eb"
};
var my_token = "";

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();
messaging.requestPermission()
.then(function() {
  console.log('Have Permission');

  return messaging.getToken();  // note: FOR GET TOKEN must -> create a empty file with name is: firebase-messaging-sw.js PUT on the ROOT: http://localhost/firebase-messaging-sw.js
})
.then(function(token) {
    my_token = token
    console.log(token);
})
.catch(function(err) {
  alert ("Error: Please grant the permission allow notification on the browser!!!");
});

messaging.onMessage(function(payload) { 
    $('#message').text("onMessage: " + payload.notification.body + ' from: ' + payload.from + ' with title: ' + payload.notification.title)
    console.log("onMessage: ", JSON.stringify(payload));
});

function get_token() {
    $('#my_token').text(my_token);
    console.log(my_token);
}

function gen_curl() {
    var key = "AAAAbh_J-nI:APA91bGn1OssamQlG4R1v84yXOv-6oynz1i4eNltzQLd5ojIiFSHvnCFHJyA33QcRfeAMa5As2mjfEjkRA_1LfXA-YM8gsqEQssm3Ykrn8FSBENqwkot5KPWY0zMefYB1RZj1ZlZfsWy";
    // var to = "f8UQCp0VHqCrBR0I5Jr8x0:APA91bGcofGWhILailGiW-ah-8gJ-8rJYwB-d_5xH09LJ-ZzpLzXuS9L0o9uGxK6FvD-u4Dm3qAhGiTUUmrTLM0VBKbztL9qOXiaDsVIC-CYVuHnGWxE32HNUYAjWHGVKILljA7fTbHaL";
    // var to = "d0x-iY4TdLTViddcg-TiTI:APA91bGIYtLd_Txl0uHxR2YYHYPwFCvoB_-nD0MtZTq_WmU80cPCwKpkDZsPEhRqxHhCU6NuSBvbatWnD5rhhbd_h6YNRJCcq4cOnSitWRckVw8XLqHxXumYlpgOVI0rnwJ6PEoE8BvT";
    
    var to =  $('#my_token').text();
    var title = "Congratulation";
    var body = "You had received push successfully!!!";
    var icon = "logo.png";
    var url = "https://fcm.googleapis.com/fcm/send";
    var command = 'curl --header "Authorization: key=' + key + '" --header "Content-Type: application/json" -d \'{"to": "' + to + '", ';
    command += '"notification": {"title": "' + title + '", "body": "' + body + '", "icon": "' + icon + '"}}\' ' + url;

    $('#curl_command').text(command);
    console.log(command);
}

$(document).ready(function() {
    console.log('ready');
   
});


// d0x-iY4TdLTViddcg-TiTI:APA91bGIYtLd_Txl0uHxR2YYHYPwFCvoB_-nD0MtZTq_WmU80cPCwKpkDZsPEhRqxHhCU6NuSBvbatWnD5rhhbd_h6YNRJCcq4cOnSitWRckVw8XLqHxXumYlpgOVI0rnwJ6PEoE8BvT

