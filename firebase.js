import React from 'react'

import firebase from 'firebase'
import 'firebase/database'
import 'firebase/auth'


var firebaseConfig = {
    apiKey: "AIzaSyCEtMlf7E4xjg5lRlOcSehUs4GmR9wN0JE",
    authDomain: "database-practice-1cd41.firebaseapp.com",
    databaseURL: "https://database-practice-1cd41.firebaseio.com",
    projectId: "database-practice-1cd41",
    storageBucket: "database-practice-1cd41.appspot.com",
    messagingSenderId: "169124041241",
    appId: "1:169124041241:web:bad17cac56d249878b9088",
    measurementId: "G-BGVC6KDTSE"
  };
  // Initialize Firebase
  export default firebase.initializeApp(firebaseConfig);