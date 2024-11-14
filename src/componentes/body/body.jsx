// Body.jsx
import React, { useState, useEffect, useContext } from 'react';
import './body.css';
import axios from 'axios';
import producto1Img from '../multimedia/Remeranegra.jpg';
import producto2Img from '../multimedia/RemeraBasica.jpg';
import producto3Img from '../multimedia/RemeraUnisex.jpg';
import imagenprinciapl from '../multimedia/image.png';
import producto4Img from '../multimedia/Sueter1.jpg';
import producto5Img from '../multimedia/Sueter 2.jpg';
import { CartContext } from '../cart/CartContext'; // Importa el contexto

export default function Body() {
  const [data, setData] = useState([]);
  const { addToCart } = useContext(CartContext); // Usa el contexto para agregar al carrito

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/producto');
        console.log('Datos recibidos:', response.data);
        setData(response.data);
      } catch (error) {
        console.error('Error interno del servidor:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <img className="imagenprincipal" src={imagenprinciapl} alt="Imagen principal" />

      <div className="body">
        {data.map((producto) => (
          <div className="producto" key={producto.id}>
            <img className="imagen-producto" src={producto.img} alt={producto.name} />
            <h2 className="nombreproducto">{producto.name}</h2>
            <p className="precio">Precio: {producto.price}</p>
            <button className="boton-carrito" onClick={() => addToCart(producto)}>Agregar</button>
          </div>
        ))}

        <div className="producto">
          <img className="imagen-producto" src={producto1Img} alt="Remera negra oversize" />
          <h2 className="nombreproducto">Remera negra oversize</h2>
          <p className="precio">Precio: 10.000</p>
          <button className="boton-carrito" onClick={() => addToCart({ name: "Remera negra oversize", price: 10000, img: producto1Img })}>
            Agregar
          </button>
        </div>
        {/* Otros productos hardcodeados aquí... */}

      </div>
      <div className="body">
        {data.map((producto) => (
          <div className="producto" key={producto.id}>
            <img className="imagen-producto" src={producto.img} alt={producto.name} />
            <h2 className="nombreproducto">{producto.name}</h2>
            <p className="precio">Precio: {producto.price}</p>
            <button className="boton-carrito" onClick={() => addToCart(producto)}>Agregar</button>
          </div>
        ))}

        <div className="producto">
          <img className="imagen-producto" src={producto2Img} alt="Sueter1" />
          <h2 className="nombreproducto">Sueter</h2>
          <p className="precio">Precio: 10.000</p>
          <button className="boton-carrito" onClick={() => addToCart({ name: "Sueter", price: 20000, img: producto1Img })}>
            Agregar
          </button>
        </div>
        {/* Otros productos hardcodeados aquí... */}

      </div>
    </>
  );
}
