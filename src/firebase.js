import firebase from 'firebase'
import { debounce } from '@material-ui/core';

const firebaseConfig = {
    apiKey: "AIzaSyAFZGQwTmCaNn57RBUB3kBMITUxPDMuCQs",
    authDomain: "tiktok-clone-f9e09.firebaseapp.com",
    databaseURL: "https://tiktok-clone-f9e09.firebaseio.com",
    projectId: "tiktok-clone-f9e09",
    storageBucket: "tiktok-clone-f9e09.appspot.com",
    messagingSenderId: "25481019029",
    appId: "1:25481019029:web:8fcebb563432ea8582e59c",
    measurementId: "G-CWP5M71LQK"
  };

  const firebaseApp = 
  firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;