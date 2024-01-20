import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalStyles } from './global-styles.js'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <GlobalStyles />
        <App />
    </>
)
