import React from 'react';
import './body.css'; 
import { useState, useEffect } from 'react';
import axios from 'axios';

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
            </div>
        ))}
      </div>
      <div className='foto-fondo' >
        <img src=""/>
      </div>
      <div className="produ"  >
        <div className="producto"> 
            <img className='imagen-producto' src= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJGaw4dYuOtiSFm5DPSbK99vuPnL_GQr_ZEiYuUX89KeNaK8zNSee9Kduv4VbANNX964&usqp=CAU' alt='Remera negra oversize' style={{ width: '150px', height: '150px' }} />
            <h2 className='nombreproducto'>Remera negra oversize</h2>
            <p className='precio'>Precio: 10.000</p>
        </div>
      </div> 
         
    </>
)}
