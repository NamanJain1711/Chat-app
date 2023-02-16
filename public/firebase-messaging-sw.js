/* eslint-disable no-undef */
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts(
  'https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js'
);

firebase.initializeApp({
    apiKey: "AIzaSyCHrMjLjOIEDpUJcEufQunIl2H83QCcPCs",
    authDomain: "chat-web-app-93779.firebaseapp.com",
    databaseURL: "https://chat-web-app-93779-default-rtdb.firebaseio.com",
    projectId: "chat-web-app-93779",
    storageBucket: "chat-web-app-93779.appspot.com",
    messagingSenderId: "542088811395",
    appId: "1:542088811395:web:7baebffb21a88f93fe1cb6",
});

firebase.messaging();
