import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import { CartContext, CartProvider } from './CartContext.jsx'
import { ViewProvider } from './ViewSelectionProduct.jsx'



createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <ViewProvider>
    <CartProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CartProvider>
    </ViewProvider>
  </StrictMode>
)
