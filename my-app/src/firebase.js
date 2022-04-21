import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import 'firebase/compat/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyAZ29Qxhc5hLP1UQefBQxO8dnzjpZfNLck",
  authDomain: "chatty-c4d40.firebaseapp.com",
  projectId: "chatty-c4d40",
  storageBucket: "chatty-c4d40.appspot.com",
  messagingSenderId: "944436772196",
  appId: "1:944436772196:web:4da97d202ba57b53f7ce71"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;