import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyCC8vD2yiyHwAysKNaFmyuI641J2yIXv5I",
    authDomain: "challenge-7a25a.firebaseapp.com",
    databaseURL: "https://challenge-7a25a.firebaseio.com",
    projectId: "challenge-7a25a",
    storageBucket: "challenge-7a25a.appspot.com",
    messagingSenderId: "663465343295",
    appId: "1:663465343295:web:f09ad365b191d00141fb8a",
    measurementId: "G-MST4MTK3BE"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { db, auth };