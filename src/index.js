import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/app';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const firebaseConfig = {
   apiKey: 'AIzaSyCj51mgaUIVCnQbcR3AUtWj3ZNnJWzjrUw',
   authDomain: 'personal-site-cf52e.firebaseapp.com',
   projectId: 'personal-site-cf52e',
   storageBucket: 'personal-site-cf52e.appspot.com',
   messagingSenderId: '455838731100',
   appId: '1:455838731100:web:543947c5f826b715f68f99',
   measurementId: 'G-BJDGEF4R1P',
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.render(
   <React.StrictMode>
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<App />} />
         </Routes>
      </BrowserRouter>
   </React.StrictMode>,
   document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
