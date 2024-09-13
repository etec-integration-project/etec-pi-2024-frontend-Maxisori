import React, { useState, useEffect } from 'react';
import './body.css'; 
import axios from 'axios';
import producto1Img from '../multimedia/Remeranegra.jpg';
import producto2Img from '../multimedia/RemeraBasica.jpg';
import producto3Img from '../multimedia/RemeraUnisex.jpg';
import imagenprinciapl from '../multimedia/image.png';
import producto4Img from '../multimedia/Sueter1.jpg';
import producto5Img from '../multimedia/Sueter 2.jpg';

export default function Body() {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);

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

  const addToCart = (producto) => {
    setCart((prevCart) => [...prevCart, producto]);
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const handlePurchase = async () => {
    try {
      await axios.post('http://localhost:8080/comprar', cart);
      alert('Compra realizada con éxito');
      setCart([]); // Vaciar el carrito después de la compra
    } catch (error) {
      console.error('Error al realizar la compra:', error);
    }
  };

  return (
    <>
      <img className="imagenprincipal" src={imagenprinciapl} alt="Imagen principal" />

      <div className="body">
        {/* Mostrar todos los productos desde la base de datos */}
        {data.map((producto) => (
          <div className="producto" key={producto.id}>
            <img className="imagen-producto" src={producto.img} alt={producto.name} />
            <h2 className="nombreproducto">{producto.name}</h2>
            <p className="precio">Precio: {producto.price}</p>
            <button className="boton-carrito" onClick={() => addToCart(producto)}>Agregar</button>
          </div>
        ))}

        {/* Mostrar productos hardcodeados */}
        <div className="producto">
          <img className="imagen-producto" src={producto1Img} alt="Remera negra oversize" />
          <h2 className="nombreproducto">Remera negra oversize</h2>
          <p className="precio">Precio: 10.000</p>
          <button className="boton-carrito" onClick={() => addToCart({ name: "Remera negra oversize", price: 10000, img: producto1Img })}>
            Agregar
          </button>
        </div>

        <div className="producto">
          <img className="imagen-producto" src={producto2Img} alt="Remera blanca básica" />
          <h2 className="nombreproducto">Remera blanca básica</h2>
          <p className="precio">Precio: 8.500</p>
          <button className="boton-carrito" onClick={() => addToCart({ name: "Remera blanca básica", price: 8500, img: producto2Img })}>
            Agregar
          </button>
        </div>

        <div className="producto">
          <img className="imagen-producto" src={producto3Img} alt="Remera unisex gris melange" />
          <h2 className="nombreproducto">Remera unisex gris melange</h2>
          <p className="precio">Precio: 9.000</p>
          <button className="boton-carrito" onClick={() => addToCart({ name: "Remera unisex gris melange", price: 9000, img: producto3Img })}>
            Agregar
          </button>
        </div>

        <div className="producto">
          <img className="imagen-producto" src={producto4Img} alt="Suéter 1" />
          <h2 className="nombreproducto">Suéter 1</h2>
          <p className="precio">Precio: 12.000</p>
          <button className="boton-carrito" onClick={() => addToCart({ name: "Suéter 1", price: 12000, img: producto4Img })}>
            Agregar
          </button>
        </div>

        <div className="producto">
          <img className="imagen-producto" src={producto5Img} alt="Suéter 2" />
          <h2 className="nombreproducto">Suéter 2</h2>
          <p className="precio">Precio: 14.000</p>
          <button className="boton-carrito" onClick={() => addToCart({ name: "Suéter 2", price: 14000, img: producto5Img })}>
            Agregar
          </button>
        </div>
      </div>

      {/* Mostrar el carrito */}
      <div className="carrito">
        <h2>Carrito</h2>
        {cart.length === 0 ? (
          <p>El carrito está vacío</p>
        ) : (
          <ul>
            {cart.map((producto, index) => (
              <li key={index}>
                <img src={producto.img} alt={producto.name} style={{ width: '50px' }} />
                <span>{producto.name}</span>
                <span> - {producto.price}</span>
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
    </>
  );
}
