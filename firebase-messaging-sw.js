importScripts("https://www.gstatic.com/firebasejs/7.18.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.18.0/firebase-messaging.js");


var firebaseConfig = {
    apiKey: "AIzaSyDVXPqEEVGfslWei8SRvlsdUzBBj4Bhr20",
    authDomain: "gpstrackmobiledi-1523763304572.firebaseapp.com",
    databaseURL: "https://gpstrackmobiledi-1523763304572.firebaseio.com",
    projectId: "gpstrackmobiledi-1523763304572",
    storageBucket: "gpstrackmobiledi-1523763304572.appspot.com",
    messagingSenderId: "472979733106",
    appId: "1:472979733106:web:fceaf7f9b91447d1c920eb"
  };
  


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload) {

    const title = "Hi";
    const options =  {
        body: payload.data.status
    };

    return self.registration.showNotifications(title, options);
    // return self.registration.showNotification(title, options);
});