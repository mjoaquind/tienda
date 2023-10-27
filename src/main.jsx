import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { initializeApp } from "firebase/app";
import CartProvider from './context/cart.provider.jsx';


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
/*  apiKey: "AIzaSyA7yCAHDPCmKrCc2RiE_3WvLmRWwsMLkk4",
  authDomain: "tienda-5178e.firebaseapp.com",
  projectId: "tienda-5178e",
  storageBucket: "tienda-5178e.appspot.com",
  messagingSenderId: "989108753754",
  appId: "1:989108753754:web:9f6fb47950154f74028f63"*/
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>,
)
