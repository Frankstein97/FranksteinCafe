import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDz9yF39HWTMuXvZw5nndZiMHl1JFf-_p4",
//   authDomain: "franksteincafe.firebaseapp.com",
//   projectId: "franksteincafe",
//   storageBucket: "franksteincafe.appspot.com",
//   messagingSenderId: "996267043453",
//   appId: "1:996267043453:web:52a4b8b00c551855a4df14"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);



//__________________FIREBASE REAL ORIGINAL_____________________________________________//

/**/  
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAo_Sxw3Zey_b-dSslUJaoEurcZS1Sl7VQ",
  authDomain: "cafeapp-e37d4.firebaseapp.com",
  projectId: "cafeapp-e37d4",
  storageBucket: "cafeapp-e37d4.appspot.com",
  messagingSenderId: "1025776076965",
  appId: "1:1025776076965:web:367b0e59a7379cec54254c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


//________________________no usar hasta que funcione el codigo____________________________/


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
