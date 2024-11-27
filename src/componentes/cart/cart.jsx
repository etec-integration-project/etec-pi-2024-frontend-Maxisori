// Cart.jsx
import React, { useContext, useState } from 'react';
import './cart.css'; // Usa el nuevo CSS
import { CartContext } from './CartContext';
import imagenprinciapl from '../multimedia/image.png';
import axios from 'axios';

export default function Cart() {
  const { cart, removeFromCart, clearCart, addToCart } = useContext(CartContext);
  const [purchaseSuccess, setPurchaseSuccess] = useState(false);

  const handlePurchase = async () => {
    const filteredCart = Object.values(cart).map(({ id, quantity }) => ({ id, quantity }));

    const jsonifiedCart = JSON.stringify(filteredCart);

    if (jsonifiedCart !== "[]") {
      try {
        await axios.post('/app/anadir', {jsonifiedCart});

        clearCart();
        setPurchaseSuccess(true);
        setTimeout(() => setPurchaseSuccess(false), 3000);
      } catch (err) {
        alert('Error al realizar la compra');
      }
    } else {
      alert('Seleccionar articulos antes de realizar la compra.');
    }
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
          <>
            <ul>
              {Object.values(cart).map((producto) => (
                <li key={producto.id} className="carrito-item">
                  <img src={producto.img} alt={producto.name} />
                  <span>{producto.quantity}x {producto.name}</span>
                  <span>${Number((producto.price * producto.quantity)).toFixed(1)}</span>
                  <div className="opciones">
                    <button className="boton-comprar" onClick={() => addToCart(producto)}>Sumar</button>
                    <button className="boton-borrar" onClick={() => removeFromCart(producto.id)}>Borrar</button>
                  </div>
                </li>
              ))}
            </ul>
            <button className="boton-comprar" onClick={handlePurchase}>
              Finalizar Compra
            </button>
          </>
        )}
      </div>
    </>
  );
}
