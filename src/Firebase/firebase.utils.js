import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAARxNXq7JtLRjfV9OBnKNp2b88C2TYSQ8",
    authDomain: "clothing-f5f2c.firebaseapp.com",
    databaseURL: "https://clothing-f5f2c.firebaseio.com",
    projectId: "clothing-f5f2c",
    storageBucket: "clothing-f5f2c.appspot.com",
    messagingSenderId: "629802750163",
    appId: "1:629802750163:web:9309db5622138503c28426",
    measurementId: "G-4XM35CDJ2M"
  };
firebase.initializeApp(firebaseConfig)
export const auth=firebase.auth();
export const firestore=firebase.firestore();
const provider=new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:"select_account" });
export const signInWithGoogle=()=>auth.signInWithPopup(provider);
export default firebase;