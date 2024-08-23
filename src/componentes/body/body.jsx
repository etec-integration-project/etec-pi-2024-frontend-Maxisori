import React from 'react';
import './body.css'; 
import { useState, useEffect } from 'react';
import axios from 'axios';

import producto1Img from '../multimedia/Remeranegra.jpg'
import producto2Img from '../multimedia/RemeraBasica.jpg'
import producto3Img from '../multimedia/RemeraUnisex.jpg'
 
export default function Body() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/producto');
                console.log('Datos recibidos:', response.data); // Log para depuración
                setData(response.data);
            } catch (error) {
                console.error('Error interno del servidor:', error);
            }
        };

        fetchData();
    }, []);

    return (
      <>
        <div className="body">
          {data.map(producto => (
              <div className="producto" key={producto.id}>
                  <img className='imagen-producto' src={producto.img} alt={producto.name} />
                  <h2 className='nombreproducto'>{producto.name}</h2>
                  <p className='precio'>Precio: {producto.price}</p>
                  <button className='boton-carrito'>Agregar al Carrito</button>
              </div>
          ))}
        </div>

        <div className="produ">
          <div className="producto"> 
              <img className='imagen-producto' src={producto1Img} alt='Remera negra oversize' />
              <h2 className='nombreproducto'>Remera negra oversize</h2>
              <p className='precio'>Precio: 10.000</p>
              <button className='boton-carrito'>Agregar al Carrito</button>
          </div>
          <div className="producto"> 
              <img className='imagen-producto' src={producto2Img} alt='Remera blanca básica' />
              <h2 className='nombreproducto'>Remera blanca básica</h2>
              <p className='precio'>Precio: 8.500</p>
              <button className='boton-carrito'>Agregar al Carrito</button>
          </div>
          <div className="producto"> 
              <img className='imagen-producto' src={producto3Img} alt='Remera gris melange' />
              <h2 className='nombreproducto'>Remera gris melange</h2>
              <p className='precio'>Precio: 9.000</p>
              <button className='boton-carrito'>Agregar al Carrito</button>
          </div>
        </div> 
      </>
    );
}
