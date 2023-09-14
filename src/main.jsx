import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArp4y1mywGAbuBMJchVlLRFa3CWuACWT0",
  authDomain: "mernauth-b4a17.firebaseapp.com",
  projectId: "mernauth-b4a17",
  storageBucket: "mernauth-b4a17.appspot.com",
  messagingSenderId: "263341667446",
  appId: "1:263341667446:web:e811655405eb77eaf41b57",
  measurementId: "G-37Y5Q36TTJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
