import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import React from 'react';
import Carrito from './componentes/cart/cart';
import Header from './componentes/header/header';
import Body from './componentes/body/body';
import Login from './componentes/login/login';
import Register from './componentes/register/register'; 



function App() {
  return (
    <>
    
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
            path='/redes'
            element={
              <>
                <Header />
              </>
            }
          /> 
          <Route 
            path='/envios'
            element={
              <>
                <Header />
              </>
            }
          />
          
        </Routes>

      </Router>

      
    </>    
  );
}
export default App;


