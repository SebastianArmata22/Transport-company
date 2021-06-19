import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBHlaSUbd8FZTieRELN5zNLuCDSDGVWOYs",
    authDomain: "transport-company-b6099.firebaseapp.com",
    projectId: "transport-company-b6099",
    storageBucket: "transport-company-b6099.appspot.com",
    messagingSenderId: "39977444622",
    appId: "1:39977444622:web:27a28d33060f8179cf235f",
    measurementId: "G-72L036N4GS"
  };
  firebase.initializeApp(firebaseConfig)
  export default firebase
  export const database = firebase.firestore();
  export const auth = firebase.auth()