import React from 'react';
import ReactDOM from 'react-dom/client';
import "normalize.css";
import App from './App';
import { GlobalStyles } from "./global-styles";
import {fireBase}from './lib/firebase.prod';
import { FireBaseContext } from './context/firebase';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <FireBaseContext.Provider value= {{fireBase}}>
    <GlobalStyles />
    <App />
    </FireBaseContext.Provider>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
