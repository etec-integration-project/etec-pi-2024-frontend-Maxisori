// CartContext.js
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (producto) => {
    if (cart[producto.id]) {
      const updatedCart = { ...cart };
      updatedCart[producto.id].quantity += 1;
      setCart(updatedCart);
    } else {
      setCart({
      ...cart,
      [producto.id]: { ...producto, quantity: 1 },
      });
    }


    // setCart((prevCart) => [...prevCart, producto]);
  };

  const removeFromCart = (productId) => {
    const updatedCart = { ...cart };

    if (updatedCart[productId]) {
      if (updatedCart[productId].quantity > 1) {
        updatedCart[productId].quantity -= 1;
      } else {
        delete updatedCart[productId];
      }

      setCart(updatedCart);
    }

    // setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  const clearCart = () => {
    console.log(cart);
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
