/*
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(<App />) ;


import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
<BrowserRouter>
    <App />
</BrowserRouter>
);

*/

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from './context/CartContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
    <BrowserRouter> {/* 👈 Primero BrowserRouter */}
      <CartProvider> {/* 👈 Luego CartProvider */}
        <App />
    </CartProvider>
    </BrowserRouter>
</React.StrictMode>
)
