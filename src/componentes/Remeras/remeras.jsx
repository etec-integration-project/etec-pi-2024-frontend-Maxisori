import React, { useState, useEffect, useContext } from 'react';
import './remeras.css';
import axios from 'axios';
import { CartContext } from '../cart/CartContext'; // Importa el contexto
import producto1Img from '../multimedia/Remeranegra.jpg';
import producto2Img from '../multimedia/RemeraBasica.jpg';
import imagenprinciapl from '../multimedia/image.png';

const Remeras = () => {
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

  // Función para manejar el agregar al carrito
  const handleAddToCart = (producto) => {
    addToCart(producto);
    setShowMessage(true); // Muestra el mensaje de producto añadido
    setTimeout(() => setShowMessage(false), 1500); // Oculta el mensaje después de 1.5 segundos
  };

  return (
    <>
      {/* Imagen principal */}
      <img className="imagenprincipal" src={imagenprinciapl} alt="Imagen principal" />

      {/* Mensaje de producto añadido al carrito */}
      {showMessage && (
        <div className="mensaje-anadir">
          ¡Producto añadido al carrito!
        </div>
      )}

      {/* Contenedor de productos */}
      <div className="body">
        {data.map((producto) => (
          <div className="producto" key={producto.id}>
            <img className="imagen-producto" src={producto.img} alt={producto.name} />
            <h2 className="nombreproducto">{producto.name}</h2>
            <p className="precio">Precio: ${producto.price}</p>
            <button className="boton-carrito" onClick={() => handleAddToCart(producto)}>
              Agregar
            </button>
          </div>
        ))}

        {/* Productos adicionales */}
        <div className="producto">
          <img className="imagen-producto" src={producto1Img} alt="Remera negra oversize" />
          <h2 className="nombreproducto">Remera negra oversize</h2>
          <p className="precio">Precio: $10,000</p>
          <button
            className="boton-carrito"
            onClick={() => handleAddToCart({ id: 101, name: 'Remera negra oversize', price: 10000, img: producto1Img })}
          >
            Agregar
          </button>
        </div>

        <div className="producto">
          <img className="imagen-producto" src={producto2Img} alt="Remera blanca básica" />
          <h2 className="nombreproducto">Remera blanca básica</h2>
          <p className="precio">Precio: $8,500</p>
          <button
            className="boton-carrito"
            onClick={() => handleAddToCart({ id: 102, name: 'Remera blanca básica', price: 8500, img: producto2Img })}
          >
            Agregar
          </button>
        </div>
      </div>
    </>
  );
};

export default Remeras;
