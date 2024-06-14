import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';

const LoginForm = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [captchaToken, setCaptchaToken] = useState('');

  const handleLogin = async () => {
    if (email.trim() === '' || password.trim() === '') {
      alert('Por favor, complete todos los campos.');
    } else if (password.length < 6) {
      alert('La contraseña debe tener al menos 6 caracteres.');
    } else if (!captchaToken) {
      alert('Por favor, complete el CAPTCHA.');
    } else {
      try {
        await axios.post('http://localhost:8080/login', {
          email,
          password,
          captchaToken
        });

        alert("Login exitoso");
      } catch (error) {
        alert("Login fallido");
        console.log("Error al ingresar: ", error);
      }
    }
  };

  return (
    <div className="todo1">
      <form className='form-login'>
        <h2 className="registro">Iniciar sesión</h2>
        <br />
        <label>Email o Nombre de usuario:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <label>Contraseña:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        <ReCAPTCHA className='recaptcha-container'
          sitekey="6LeqyPgpAAAAABOEPA7Ftkh0esVJW6UPHCftqFkN"
          onChange={(token) => setCaptchaToken(token)}
        />
        <br />
        <button type="button" onClick={handleLogin}>Iniciar sesión</button>
        <p>¿No tienes una cuenta? <Link to="/registro">Regístrese</Link></p>
      </form>
    </div>
  );
};

export default LoginForm;
