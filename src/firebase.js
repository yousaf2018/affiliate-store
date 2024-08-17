import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFBwaHdvlrv3JHaGCt_9syZrBL8xxgHLA",
  authDomain: "affiliate-store-45e87.firebaseapp.com",
  projectId: "affiliate-store-45e87",
  storageBucket: "affiliate-store-45e87.appspot.com",
  messagingSenderId: "849690335915",
  appId: "1:849690335915:web:b5df9d33aaf71cbc3c35ee",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
export { signInWithEmailAndPassword, signOut };
export { collection, getDocs, query, where };
