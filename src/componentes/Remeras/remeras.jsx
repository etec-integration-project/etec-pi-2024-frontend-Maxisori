import React from 'react';
import "./remeras.css"
import producto1Img from '../multimedia/Remeranegra.jpg';
import producto2Img from '../multimedia/RemeraBasica.jpg';
import producto3Img from '../multimedia/RemeraUnisex.jpg';
import imagenprinciapl from '../multimedia/image.png';

const Remeras = () => {
    return (
      <>
        <img className="imagenprincipal" src={imagenprinciapl} alt="Imagen principal" />
        <div className="body">
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
        </div>
      </>
    );
  }
  
  export default Remeras;
  




