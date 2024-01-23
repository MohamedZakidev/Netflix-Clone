import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalStyles } from './global-styles.js'
import App from './App.jsx'
import { FirebaseContext } from './context/firebase.js'

const firebaseConfig = {
    apiKey: "AIzaSyCoIxLPiEs3Jqo_xDn6G3ncP8oTkZnkyn4",
    authDomain: "netflix-f44f5.firebaseapp.com",
    projectId: "netflix-f44f5",
    storageBucket: "netflix-f44f5.appspot.com",
    messagingSenderId: "832008852956",
    appId: "1:832008852956:web:b3f2de12ebdd8bd0f2ab19"
};

const firebase = window.firebase.initializeApp(firebaseConfig)

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
    <FirebaseContext.Provider value={ {firebase: firebase} }>
        <GlobalStyles />
        <App />
    </FirebaseContext.Provider>
    </>
)
