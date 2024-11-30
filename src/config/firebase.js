// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth ,GoogleAuthProvider} from 'firebase/auth'

import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAyYi5AJwAl7R0AWfFlR20FqcuXRS_B214",
  authDomain: "moroccan-paths.firebaseapp.com",
  projectId: "moroccan-paths",
  storageBucket: "moroccan-paths.appspot.com",
  messagingSenderId: "1047969068130",
  appId: "1:1047969068130:web:e318f6d69d646c77070d3b"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const Gprovider = new GoogleAuthProvider(app);
export const db = getFirestore(app)
export const storage= getStorage(app)