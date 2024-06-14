import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './register.css';
import ReCAPTCHA from 'react-google-recaptcha';

const RegisterForm = ({ history }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [captchaToken, setCaptchaToken] = useState('');

  const handleRegister = async () => {
    if (username.trim() === '' || email.trim() === '' || password.trim() === '' || repeatPassword.trim() === '') {
      setError('Por favor, complete todos los campos.');
    } else if (password !== repeatPassword) {
      setError('Las contraseñas no coinciden.');
    } else if (password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres.');
    } else if (!captchaToken) {
      setError('Por favor, complete el CAPTCHA.');
    } else {
      try {
        await axios.post('http://localhost:8080/registro', {
          username,
          email,
          password,
          captchaToken
        });

        setSuccessMessage('Registro exitoso. Ahora puedes iniciar sesión.');
      } catch (error) {
        setError('Error al registrarse');
        console.log('Error al registrarse ', error);
      }
    }
  };

  return (
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
        <br />
        <ReCAPTCHA className='recaptcha-container'
          sitekey="6LeqyPgpAAAAABOEPA7Ftkh0esVJW6UPHCftqFkN"
          onChange={(token) => setCaptchaToken(token)}
        />
        <br />
        <button type="button" onClick={handleRegister}>Registrarse</button>
        {error && <div className="error-message">{error}</div>}
        {successMessage && <div className="success-message">{successMessage}</div>}
        <p>¿Ya tienes una cuenta? <Link to="/login">Iniciar sesión</Link></p>
      </form>
    </div>
  );
};

export default RegisterForm;

