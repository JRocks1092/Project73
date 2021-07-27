import { firebase } from '@firebase/app';
import '@firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyDuOj72PDymT3ijooLoiItN7aNyWuqXZhM",
    authDomain: "story-app-c8c62.firebaseapp.com",
    projectId: "story-app-c8c62",
    storageBucket: "story-app-c8c62.appspot.com",
    messagingSenderId: "281650545908",
    appId: "1:281650545908:web:b6626297821011e32fcaa1"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();

//let app = firebase.initializeApp(firebaseConfig);
//export default app.database();


//  import { firebase } from '@firebase/app'; 
//import '@firebase/firestore'