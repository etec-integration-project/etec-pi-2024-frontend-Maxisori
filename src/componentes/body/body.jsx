import React, { useState, useEffect } from 'react';
import './body.css'; 
import axios from 'axios';
import producto1Img from '../multimedia/Remeranegra.jpg';
import producto2Img from '../multimedia/RemeraBasica.jpg';
import producto3Img from '../multimedia/RemeraUnisex.jpg';
import imagenprinciapl from '../multimedia/image.png';
import producto4Img from '../multimedia/Sueter1.jpg';
import producto5Img from '../multimedia/Sueter 2.jpg';
import producto6Img from '../multimedia/Sueter3.jpg';
import producto7Img from '../multimedia/Buzo 1.jpg';
import producto8Img from '../multimedia/Buzo 2.jpg';

export default function Body() {
  const [data, setData] = useState([]);

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

      {/* Mostrar todos los productos en la página principal */}
      <div className="body">
        {data.map((producto) => (
          <div className="producto" key={producto.id}>
            <img className="imagen-producto" src={producto.img} alt={producto.name} />
            <h2 className="nombreproducto">{producto.name}</h2>
            <p className="precio">Precio: {producto.price}</p>
            <button className="boton-carrito">Agregar al Carrito</button>
          </div>
        ))}

        {/* Mostrar productos hardcodeados */}
        <div className="producto">
          <img className="imagen-producto" src={producto1Img} alt="Remera negra oversize" />
          <h2 className="nombreproducto">Remera negra oversize</h2>
          <p className="precio">Precio: 10.000</p>
          <button className="boton-carrito">Agregar al Carrito</button>
        </div>
        <div className="producto">
          <img className="imagen-producto" src={producto2Img} alt="Remera blanca básica" />
          <h2 className="nombreproducto">Remera blanca básica</h2>
          <p className="precio">Precio: 8.500</p>
          <button className="boton-carrito">Agregar al Carrito</button>
        </div>
        <div className="producto">
          <img className="imagen-producto" src={producto3Img} alt="Remera unisex gris melange" />
          <h2 className="nombreproducto">Remera unisex gris melange</h2>
          <p className="precio">Precio: 9.000</p>
          <button className="boton-carrito">Agregar al Carrito</button>
        </div>

        {/* Mostrar Sueters y Buzos */}
        <div className="producto">
          <img className="imagen-producto" src={producto4Img} alt="Sueter 1" />
          <h2 className="nombreproducto">Sueter 1</h2>
          <p className="precio">Precio: 12.000</p>
          <button className="boton-carrito">Agregar al Carrito</button>
        </div>
        <div className="producto">
          <img className="imagen-producto" src={producto5Img} alt="Sueter 2" />
          <h2 className="nombreproducto">Sueter 2</h2>
          <p className="precio">Precio: 14.000</p>
          <button className="boton-carrito">Agregar al Carrito</button>
        </div>
        <div className="producto">
          <img className="imagen-producto" src={producto6Img} alt="Sueter 3" />
          <h2 className="nombreproducto">Sueter 3</h2>
          <p className="precio">Precio: 11.500</p>
          <button className="boton-carrito">Agregar al Carrito</button>
        </div>
        <div className="producto">
          <img className="imagen-producto" src={producto7Img} alt="Buzo 1" />
          <h2 className="nombreproducto">Buzo 1</h2>
          <p className="precio">Precio: 13.000</p>
          <button className="boton-carrito">Agregar al Carrito</button>
        </div>
        <div className="producto">
          <img className="imagen-producto" src={producto8Img} alt="Buzo 2" />
          <h2 className="nombreproducto">Buzo 2</h2>
          <p className="precio">Precio: 15.000</p>
          <button className="boton-carrito">Agregar al Carrito</button>
        </div>
      </div>
    </>
  );
}
