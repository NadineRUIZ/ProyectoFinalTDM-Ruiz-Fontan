// Import the functions you need from the SDKs you need
import app from 'firebase/app';
import firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_2wmESRlp0odqkrbNqq3wdjDsqtE52FQ",
  authDomain: "proyecto-firebasen.firebaseapp.com",
  projectId: "proyecto-firebasen",
  storageBucket: "proyecto-firebasen.firebasestorage.app",
  messagingSenderId: "939549735125",
  appId: "1:939549735125:web:bda528729423c96b054a5c",
  measurementId: "G-XRQFCQXH2F"
};

app.initializeApp(firebaseConfig);
// Initialize Firebase
export const auth = firebase.auth();
export const db = app.firebase()