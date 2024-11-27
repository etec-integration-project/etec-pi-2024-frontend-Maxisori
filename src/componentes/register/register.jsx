import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './register.css';
import imagenprinciapl from '../multimedia/image.png';


const RegisterForm = ({ history }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleRegister = async () => {
    if (username.trim() === '' || email.trim() === '' || password.trim() === '' || repeatPassword.trim() === '') {
      setError('Por favor, complete todos los campos.');
    } else if (password !== repeatPassword) {
      setError('Las contraseñas no coinciden.');
    } else if (password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres.');
    } else {
      try {
        await axios.post('/app/registro', {
          username,
          email,
          password,
        });

        setSuccessMessage('Registro exitoso. Ahora puedes iniciar sesión.');
      } catch (error) {
        setError('Error al registrarse');
        console.log('Error al registrarse ', error);
      }
    }
  };

  return (
    <>
          <img className="imagenprincipal" src={imagenprinciapl} alt="Imagen principal" />

      <div className="register-form">
        <form>
          <h2 className="registro">Registro</h2>
          <br />
          <label>Nombre de usuario:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          <br />
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <br />
          <label>Contraseña:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <br />
          <label>Repetir contraseña:</label>
          <input type="password" value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)} />
          <button type="button" onClick={handleRegister}>Registrarse</button>
          {error && <div className="error-message">{error}</div>}
          {successMessage && <div className="success-message">{successMessage}</div>}
          <p>¿Ya tienes una cuenta? <Link to="/login">Iniciar sesión</Link></p>
        </form>
      </div>
    </>
  );
};

export default RegisterForm;

