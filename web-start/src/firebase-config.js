/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */


const config = {
  apiKey: "AIzaSyAY5ra36yIHxXK2BfWMKpfyTW-XfauvE18",
  authDomain: "friendlychat-cca0a.firebaseapp.com",
  databaseURL: "https://friendlychat-cca0a-default-rtdb.firebaseio.com",
  projectId: "friendlychat-cca0a",
  storageBucket: "friendlychat-cca0a.appspot.com",
  messagingSenderId: "329908320772",
  appId: "1:329908320772:web:e1e348fb7bdbb05783d351"
};


export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}