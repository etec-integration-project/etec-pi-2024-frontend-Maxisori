import React from 'react';
import './body.css'; 
import { useState, useEffect } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Body() {
    const [items, setItems] = useState([]);
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/producto');
                setData(response.data);
            } catch (error) {
                console.error('Error interno del servidor:', error);
            }
        };

        fetchData();
    }, []);

    const addItem = (producto) => {
      if (items[producto.id]) {
        const updatedCart = { ...items };
        updatedCart[producto.id].quantity += 1;
        setItems(updatedCart);
      } else {
          setItems({
          ...items,
          [producto.id]: { ...producto, quantity: 1 },
          });
      }
    };

    const deleteItem = (index) => {
      const updatedCart = { ...items };

      if (updatedCart[index]) {
        if (updatedCart[index].quantity > 1) {
          updatedCart[index].quantity -= 1;
        } else {
          delete updatedCart[index];
        }

        setItems(updatedCart);
      }
    };

    const deleteAllItems = () => {
        setItems([]);
    };

    const filteredCart = Object.values(items).map(({ id, quantity }) => ({ id, quantity }));
    const jsonifiedCart = JSON.stringify(filteredCart);

    const goToPayment = async () => {
      if (jsonifiedCart !== "[]") {
        try {
          await axios.post('http://localhost:8080/anadir', {jsonifiedCart});
          alert('Su pago se realizo con exito');
        } catch (err) {
          alert('Error al realizar la compra');
          console.log("Error al registrar carrito: ", err)
        }    
      } else {
          alert('Seleccionar articulos antes de realizar la compra');
      }
    };
  return (
    <>
    <div className='barra-de-busqueda' >
      <TextField fullWidth label="fullWidth" id="fullWidth" />
    </div>
    <body>
      {/* <div class="producto">
        <img className='imagen-producto' src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI5UbDe-md36cDRZkcBELXNjvRBG_uO2T1UQ&usqp=CAU'} alt='Remera Oversize' />
          <h2 className='nombreproducto' >Remera Oversize</h2>
          <p className='precio' >Precio: $3000</p>
          <button class="boton-carrito"><Link className='boton-carrito' to="/"> Agregar al Carrito </Link>  </button>
      </div> */}
      <div className="body">
        <div>
          {data.map(producto => (
              <div className="producto" key={producto.id}>
                  <img className='imagen-producto' src={producto.img} alt={producto.name} />
                  <h2 className='nombreproducto'>{producto.name}</h2>
                  <p className='precio'>Precio: {producto.price}</p>
                  <button className="boton-carrito" onClick={() => addItem(producto)}>Agregar al Carrito</button>
              </div>
          ))}
        </div>
        <div>
            <h1 className='carrito_de_compras'>Carrito de Compras</h1>
                <div className='conteiner'>
                    <button className="boton2" onClick={deleteAllItems}>Eliminar Todo</button>
                    <button className="boton2" onClick={goToPayment}>Ir a Pagar</button>
                </div>
            <div className="carrito_contenido">
            {Object.values(items).map(producto => (
                <div className="producto" key={producto.id}>
                    <img className='imagen-producto' src={producto.img} alt={producto.name} />
                    <h2 className='nombreproducto'>{producto.name}</h2>
                    <p className='precio'>Cantidad: {producto.quantity}</p>
                    <button className="boton-carrito" onClick={() => deleteItem(producto.id)}>Quitar al Carrito</button>
                </div>
            ))}
            </div>
        </div>
      </div> 
    </body>    
  </>
  );
}


