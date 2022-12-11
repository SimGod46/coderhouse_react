import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyv4GiX_u3sgPODTExdd0BLZcCk9LR2iA",
  authDomain: "e-commerce-coderhouse-fb704.firebaseapp.com",
  projectId: "e-commerce-coderhouse-fb704",
  storageBucket: "e-commerce-coderhouse-fb704.appspot.com",
  messagingSenderId: "837895659585",
  appId: "1:837895659585:web:d9045337f6e991ebd026c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
