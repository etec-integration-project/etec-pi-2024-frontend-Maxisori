// Cart.jsx
import React, { useContext, useState } from 'react';
import './cart.css';
import { CartContext } from './CartContext';

export default function Cart() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);
  const [purchaseSuccess, setPurchaseSuccess] = useState(false);

  const handlePurchase = () => {
    clearCart();
    setPurchaseSuccess(true);
    setTimeout(() => setPurchaseSuccess(false), 3000); // Ocultar el mensaje después de 3 segundos
  };

  return (
    <div className="carrito">
      <h2>Carrito</h2>
      {purchaseSuccess && <p className="success-message">¡Su compra se realizó con éxito!</p>}
      {cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <ul>
          {cart.map((producto, index) => (
            <li key={index} className="carrito-item">
              <img src={producto.img} alt={producto.name} style={{ width: '50px', height: '50px' }} />
              <span>{producto.name}</span>
              <span> - ${producto.price}</span>
              <button className="boton-borrar" onClick={() => removeFromCart(index)}>Borrar</button>
            </li>
          ))}
        </ul>
      )}
      {cart.length > 0 && (
        <button className="boton-comprar" onClick={handlePurchase}>
          Finalizar Compra
        </button>
      )}
    </div>
  );
}
