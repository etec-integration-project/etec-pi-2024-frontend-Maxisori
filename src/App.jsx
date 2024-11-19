// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import React from 'react';
import { CartProvider } from './componentes/cart/CartContext'; // Importa el CartProvider
import Carrito from './componentes/cart/cart';
import Header from './componentes/header/header';
import Body from './componentes/body/body';
import Login from './componentes/login/login';
import Register from './componentes/register/register';
import Remeras from './componentes/Remeras/remeras';
import SuetersBuzos from '../src/componentes/sueters-buzos/sueters-buzos';

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route 
            path='/'
            element={
              <>
                <Header />
                <Body />
              </>
            }
          /> 
          <Route 
            path='/cart'
            element={
              <>
                <Header />
                <Carrito />
              </>
            }
          /> 
          <Route 
            path='/login'
            element={
              <>
                <Header />
                <Login />
              </>
            }
          /> 
          <Route 
            path='/registro'
            element={
              <>
                <Header />
                <Register />
              </>
            }
          /> 
          <Route 
            path='/remeras'
            element={
              <>
                <Header />
                <Remeras />
              </>
            }
          /> 
          <Route 
            path='/Sueters-Buzos'
            element={
              <>
                <Header />
                <SuetersBuzos />
              </>
            }
          />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
