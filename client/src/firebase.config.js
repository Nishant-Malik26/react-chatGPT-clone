// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAJfQXj7aA831YZ4B1TcFJiFXq1a0QMSdk',
  authDomain: 'chatgpt-clone-3b6bf.firebaseapp.com',
  projectId: 'chatgpt-clone-3b6bf',
  storageBucket: 'chatgpt-clone-3b6bf.appspot.com',
  messagingSenderId: '253392611921',
  appId: '1:253392611921:web:46c7995861c1b321456670',
  measurementId: 'G-YM3M26LFR5',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const goggleAuthProvider = new GoogleAuthProvider();

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(firebaseApp);

export { auth, goggleAuthProvider, db };
