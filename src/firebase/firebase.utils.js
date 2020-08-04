import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDcNAWjB8igPg5YmwYRuABUJKj0r_OY9so",
  authDomain: "vantage-db.firebaseapp.com",
  databaseURL: "https://vantage-db.firebaseio.com",
  projectId: "vantage-db",
  storageBucket: "vantage-db.appspot.com",
  messagingSenderId: "671885800584",
  appId: "1:671885800584:web:2fee565166ca15b9ac1b3d",
  measurementId: "G-5QE5FXX7FP"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;