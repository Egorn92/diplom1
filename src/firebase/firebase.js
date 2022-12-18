import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC3iorcX4iU6VxetP8othFDdRIJ-ctmLfM",
  authDomain: "modnikky-3b69a.firebaseapp.com",
  projectId: "modnikky-3b69a",
  storageBucket: "modnikky-3b69a.appspot.com",
  messagingSenderId: "754695288964",
  appId: "1:754695288964:web:30da4eeca37b97643f6ad1",
};

firebase.initializeApp(firebaseConfig);

export const database = firebase.database;

export const auth = firebase.auth();
// export const firestore = firebase.firestore();

export default firebase;
