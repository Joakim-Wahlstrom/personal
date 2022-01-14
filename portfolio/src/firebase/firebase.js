// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from 'firebase/app';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD5TLHW28OYIYT1HdrfhWKWC-CQ8uDoGKw",
  authDomain: "joakimwahlstrom-a13ce.firebaseapp.com",
  projectId: "joakimwahlstrom-a13ce",
  storageBucket: "joakimwahlstrom-a13ce.appspot.com",
  messagingSenderId: "621025587045",
  appId: "1:621025587045:web:abeabc6e933580eadbfb8c",
  measurementId: "G-H5M9XEP13P"
};

initializeApp(firebaseConfig);
const storage = getStorage();
export {storage}