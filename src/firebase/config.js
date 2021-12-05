 import firebase from 'firebase'
 import 'firebase/auth'
 import 'firebase/firebase'

 const firebaseConfig = {
    apiKey: "AIzaSyAafKLU82BjruexRcUkovTlm9QQkp3wWjQ",
    authDomain: "clonolx.firebaseapp.com",
    projectId: "clonolx",
    storageBucket: "clonolx.appspot.com",
    messagingSenderId: "1093859248495",
    appId: "1:1093859248495:web:c1b7f50858a3eae4aa409a",
    measurementId: "G-1X2LHN67YP"
  };

  export default firebase.initializeApp(firebaseConfig)