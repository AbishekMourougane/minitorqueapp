// src/firebase/config.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDXNfURwtaijmf-QCXwDrTGQAX1emD_3QQ",
  authDomain: "minitorqueapp.firebaseapp.com",
  projectId: "minitorqueapp",
  storageBucket: "minitorqueapp.firebasestorage.app",
  messagingSenderId: "217168133762",
  appId: "1:217168133762:web:b4f1bf68d505bb24d43e9b",
  measurementId: "G-G57XFL5YZ7"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
