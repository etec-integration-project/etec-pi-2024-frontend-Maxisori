// Body.jsx
import React, { useState, useEffect, useContext } from 'react';
import './body.css';
import axios from 'axios';
import imagenprinciapl from '../multimedia/image.png';
import { CartContext } from '../cart/CartContext'; // Importa el contexto

export default function Body() {
  const [data, setData] = useState([]);
  const [showMessage, setShowMessage] = useState(false); // Estado para mostrar el mensaje
  const { addToCart } = useContext(CartContext); // Usa el contexto para agregar al carrito

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/app/producto');
        console.log('Datos recibidos:', response.data);
        setData(response.data);
      } catch (error) {
        console.error('Error interno del servidor:', error);
      }
    };

    fetchData();
  }, []);

  const handleAddToCart = (producto) => {
    addToCart(producto);
    setShowMessage(true); // Muestra el mensaje de producto añadido
    setTimeout(() => setShowMessage(false), 2000); // Oculta el mensaje después de 2 segundos
  };

  return (
    <>
      <img className="imagenprincipal" src={imagenprinciapl} alt="Imagen principal" />

      {/* Mensaje de producto añadido al carrito */}
      {showMessage && <div className="mensaje-anadir">¡Producto añadido al carrito!</div>}

      <div className="body">
        {data.map((producto) => (
          <div className="producto" key={producto.id}>
            <img className="imagen-producto" src={producto.img} alt={producto.name} />
            <h2 className="nombreproducto">{producto.name}</h2>
            <p className="precio">Precio: {producto.price}</p>
            <button className="boton-carrito" onClick={() => handleAddToCart(producto)}>
              Agregar
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
