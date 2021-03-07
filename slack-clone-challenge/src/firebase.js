import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCLUlOeuBjWJDxP5VUJgusuExQXoO_TN1g",
    authDomain: "slack-clone-challenge-3d83f.firebaseapp.com",
    projectId: "slack-clone-challenge-3d83f",
    storageBucket: "slack-clone-challenge-3d83f.appspot.com",
    messagingSenderId: "187038214968",
    appId: "1:187038214968:web:a8d8c76570534e00ceefcd",
    measurementId: "G-C68CYXXB4P"
  };

  const firebaseApp =firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();


  export default db;