import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDXNfURwtaijmf-QCXwDrTGQAX1emD_3QQ",
  authDomain: "minitorqueapp.firebaseapp.com",
  projectId: "minitorqueapp",
  storageBucket: "minitorqueapp.appspot.com",  // fixed here
  messagingSenderId: "217168133762",
  appId: "1:217168133762:web:b4f1bf68d505bb24d43e9b",
  measurementId: "G-G57XFL5YZ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);