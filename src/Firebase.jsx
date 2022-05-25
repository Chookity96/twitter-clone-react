// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBvKxczrq8qvC6uKnMfB7dJ-F7FyjMLjo",
  authDomain: "twitter-clone-dc9a5.firebaseapp.com",
  projectId: "twitter-clone-dc9a5",
  storageBucket: "twitter-clone-dc9a5.appspot.com",
  messagingSenderId: "1020645676349",
  appId: "1:1020645676349:web:a5c8f6244bd1c5b96f6154"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export default db;