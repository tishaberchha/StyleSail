import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ProductProvider from './Components/ProductContext/ProductContext';
import SlidebarProvider from './Components/SliderbarContext/SlidebarContext';
import CartProvider from './Components/CartContext/CartContext'
import ShopContextProvider from './Components/Context/ShopContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SlidebarProvider>
    <CartProvider>
      <ProductProvider>
        <React.StrictMode>
          <ShopContextProvider>
          <App />
          </ShopContextProvider>
        </React.StrictMode>
      </ProductProvider>
    </CartProvider>
  </SlidebarProvider>
);
reportWebVitals();
