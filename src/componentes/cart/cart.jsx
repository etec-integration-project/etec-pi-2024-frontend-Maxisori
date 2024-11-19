// Cart.jsx
import React, { useContext, useState } from 'react';
import './cart.css'; // Usa el nuevo CSS
import { CartContext } from './CartContext';
import imagenprinciapl from '../multimedia/image.png';

export default function Cart() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);
  const [purchaseSuccess, setPurchaseSuccess] = useState(false);

  const handlePurchase = () => {
    clearCart();
    setPurchaseSuccess(true);
    setTimeout(() => setPurchaseSuccess(false), 3000); // Ocultar el mensaje después de 3 segundos
  };

  return (
    <>
      {/* Imagen de fondo */}
      <img className="imagenprincipal" src={imagenprinciapl} alt="Imagen principal" />

      {/* Contenedor principal del carrito */}
      <div className="carrito">
        <h2>Carrito de Compras</h2>

        {/* Mensaje de compra exitosa */}
        {purchaseSuccess && <p className="success-message">¡Su compra se realizó con éxito!</p>}

        {/* Contenido del carrito */}
        {cart.length === 0 ? (
          <p>El carrito está vacío</p>
        ) : (
          <ul>
            {cart.map((producto, index) => (
              <li key={index} className="carrito-item">
                <img src={producto.img} alt={producto.name} />
                <span>{producto.name}</span>
                <span>${producto.price}</span>
                <button className="boton-borrar" onClick={() => removeFromCart(index)}>
                  Borrar
                </button>
              </li>
            ))}
          </ul>
        )}

        {/* Botón de finalizar compra */}
        {cart.length > 0 && (
          <button className="boton-comprar" onClick={handlePurchase}>
            Finalizar Compra
          </button>
        )}
      </div>
    </>
  );
}
