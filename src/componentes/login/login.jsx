import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Usar useNavigate en lugar de history
import './login.css';
import axios from 'axios';
import imagenprinciapl from '../multimedia/image.png';

const LoginForm = () => {
  const [usernameOrEmail, setUsernameOrEmail] = useState(''); // Campo que puede aceptar username o email
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); // Indicador de carga
  const navigate = useNavigate(); // Reemplazo de history

  const handleLogin = async () => {
    // Validaciones
    if (usernameOrEmail.trim() === '' || password.trim() === '') {
      alert('Por favor, complete todos los campos.');
      return;
    }

    if (password.length < 6) {
      alert('La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    setLoading(true); // Mostrar indicador de carga
    try {
      const response = await axios.post('/app/login', {
        username: usernameOrEmail, // Enviar como username (o email) y password
        password,
      });

      alert("Inicio de sesión exitoso");
      console.log("Respuesta del servidor:", response.data);

      // Redirigir a la página principal
      navigate('/'); // Redirigir a la página principal después del login
    } catch (error) {
      setLoading(false); // Ocultar indicador de carga
      if (error.response && error.response.status === 401) {
        alert("Credenciales incorrectas. Intente nuevamente.");
      } else if (error.response && error.response.status === 400) {
        alert("Faltan datos. Por favor, complete todos los campos.");
      } else {
        alert("Error al iniciar sesión. Intente nuevamente más tarde.");
      }
      console.error("Error al ingresar: ", error);
    } finally {
      setLoading(false); // Asegurarse de ocultar indicador de carga al final
    }
  };

  return (
    <>
      <img className="imagenprincipal" src={imagenprinciapl} alt="Imagen principal" />

      <div className="todo1">
        <form className="form-login">
          <h2 className="registro">Iniciar sesión</h2>
          <br />
          <label>Email o Nombre de usuario:</label>
          <input
            type="text" // Cambiado de email a text para aceptar tanto username como email
            value={usernameOrEmail}
            onChange={(e) => setUsernameOrEmail(e.target.value)}
            placeholder="Ingrese su email o nombre de usuario"
          />
          <br />
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Ingrese su contraseña"
          />
          <br />
          <button type="button" onClick={handleLogin} disabled={loading}>
            {loading ? 'Cargando...' : 'Iniciar sesión'}
          </button>
          <p>¿No tienes una cuenta? <Link to="/registro">Regístrate</Link></p>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
