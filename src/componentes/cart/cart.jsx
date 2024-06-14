import React, { useState, useEffect, } from 'react';
import './cart.css';

function Cart() {
    const [items, setItems] = useState([]);
    

    const addItem = () => {
        const newItem = `Ítem ${items.length + 1}`;
        setItems([...items, newItem]);
    };

    const deleteItem = (index) => {
        const updatedItems = [...items];
        updatedItems.splice(index, 1);
        setItems(updatedItems);
    };

    const deleteAllItems = () => {
        setItems([]);
    };

    const goToPayment = () => {
        alert('Su pago se realizo con exito');
    };

    return (
        <div>
            <h1 className='carrito de compras'>Carrito de Compras</h1>
                <div className='conteiner'>
                    <button className="boton2" onClick={addItem}>Agregar Ítem</button>
                    <button className="boton2" onClick={deleteAllItems}>Eliminar Todo</button>
                    <button className="boton2" onClick={goToPayment}>Ir a Pagar</button>
                </div>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        {item}
                        <button onClick={() => deleteItem(index)} className='X'>X</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default Cart;