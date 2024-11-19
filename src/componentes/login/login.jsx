import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css';
import axios from 'axios';
import imagenprinciapl from '../multimedia/image.png';


const LoginForm = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (email.trim() === '' || password.trim() === '') {
      alert('Por favor, complete todos los campos.');
    } else if (password.length < 6) {
      alert('La contraseña debe tener al menos 6 caracteres.');
    } else {
      try {
        await axios.post('http://localhost:8080/login', {
          email,
          password,
        });

        alert("Login exitoso");
      } catch (error) {
        alert("Login fallido");
        console.log("Error al ingresar: ", error);
      }
    }
  };



  return (
    <>
      <img className="imagenprincipal" src={imagenprinciapl} alt="Imagen principal" />

      <div className="todo1">
        <form className='form-login'>
          <h2 className="registro">Iniciar sesión</h2>
          <br />
          <label>Email o Nombre de usuario:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <br />
          <label>Contraseña:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          
          <button type="button" onClick={handleLogin}>Iniciar sesión</button>
          <p>¿No tienes una cuenta? <Link to="/registro">Regístrese</Link></p>
        </form>
      </div>
      </>
  );
};

export default LoginForm;
