// CartContext.js
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (producto) => {
    setCart((prevCart) => [...prevCart, producto]);
  };

  const removeFromCart = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  const clearCart = () => {
    setCart([]);
    alert('¡Su compra se realizó con éxito!'); // Mostrar el mensaje de éxito aquí
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
