import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "antd/dist/reset.css";
import "bootstrap/dist/css/bootstrap.css";
import { AuthProvider } from "./context/auth.jsx";
import { CartProvider } from "./context/cart.jsx";
import { SearchProvider } from "./context/search.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <SearchProvider>
    <CartProvider>
    <App />
    </CartProvider>
    </SearchProvider>
    </AuthProvider>
  </React.StrictMode>,
)
