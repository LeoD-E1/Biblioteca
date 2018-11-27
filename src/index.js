import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

firebase.initializeApp({
  apiKey: "AIzaSyC7VHZ17IhOQ1K7YQlrFvL7r2SQSGXi6JY",
  authDomain: "biblioteca-686f9.firebaseapp.com",
  databaseURL: "https://biblioteca-686f9.firebaseio.com",
  projectId: "biblioteca-686f9",
  storageBucket: "biblioteca-686f9.appspot.com",
  messagingSenderId: "430194999752"
})

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
