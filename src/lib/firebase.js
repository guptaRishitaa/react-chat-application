import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyA8tlQMlqcWv9xQtVSFmi2rKYcCwBke82Q",
  authDomain: "reactchat-90d8c.firebaseapp.com",
  projectId: "reactchat-90d8c",
  storageBucket: "reactchat-90d8c.appspot.com",
  messagingSenderId: "681139172235",
  appId: "1:681139172235:web:170ea44cc13455e40ab58e"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()

