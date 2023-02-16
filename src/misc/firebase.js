import { Notification as Toast } from "rsuite";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/database";
import "firebase/messaging";
import "firebase/functions";
import { isLocalhost } from "./helpers";

const config = {
  apiKey: "AIzaSyCHrMjLjOIEDpUJcEufQunIl2H83QCcPCs",
  authDomain: "chat-web-app-93779.firebaseapp.com",
  databaseURL: "https://chat-web-app-93779-default-rtdb.firebaseio.com",
  projectId: "chat-web-app-93779",
  storageBucket: "chat-web-app-93779.appspot.com",
  messagingSenderId: "542088811395",
  appId: "1:542088811395:web:7baebffb21a88f93fe1cb6",
};

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();
export const functions = app.functions("europe-west3");
export const messaging = firebase.messaging.isSupported()
  ? app.messaging()
  : null;

if (messaging) {
  messaging.usePublicVapidKey(
    "BMzk9Ccd_J-PNr8RLgcd5SYZoP-WvgznITFCHc8OoGGIE_4_8K0r6drYnDCIZm1bhxio95fEJ3cWnWSsa8BXMCU"
  );
  messaging.onMessage(({ notification }) => {
    const { title, body } = notification;
    Toast.info({ title, description: body, duration: 0 });
  });
}

if (isLocalhost) {
  functions.useFunctionsEmulator("http://localhost:5001");
}
