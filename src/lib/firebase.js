// import { initializeApp } from "firebase/app";
// import {getAuth} from "firebase/auth";
// import {getFirestore} from "firebase/firestore";
// import {getStorage} from "firebase/storage";


// const firebaseConfig = {
//   apiKey: "AIzaSyA8tlQMlqcWv9xQtVSFmi2rKYcCwBke82Q",
//   authDomain: "reactchat-90d8c.firebaseapp.com",
//   projectId: "reactchat-90d8c",
//   storageBucket: "reactchat-90d8c.appspot.com",
//   messagingSenderId: "681139172235",
//   appId: "1:681139172235:web:170ea44cc13455e40ab58e"
// };

// const app = initializeApp(firebaseConfig);

// export const auth = getAuth()
// export const db = getFirestore()
// export const storage = getStorage()


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCko6tXkMD6ojheBowAV1Gi2Zx55M5ra0Y",
  authDomain: "chatify-6734b.firebaseapp.com",
  projectId: "chatify-6734b",
  storageBucket: "chatify-6734b.firebasestorage.app",
  messagingSenderId: "775312493827",
  appId: "1:775312493827:web:f51400cf3ffd84a38ced36",
  measurementId: "G-01GQMQ9XZM"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()
