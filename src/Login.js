import React, { useState } from 'react';
import { Navigate } from 'react-router-dom'; // Import Navigate
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false); // Add state for login status

  const handleLogin = () => {
    // Implement authentication logic here
    // For simplicity, let's assume login is successful
    setLoggedIn(true); // Set login status to true
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#f4f4f4',
    },
    form: {
      width: '300px',
      padding: '20px',
      backgroundColor: '#fff',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      boxSizing: 'border-box',
    },
    input: {
      width: '100%',
      marginBottom: '15px',
      padding: '10px',
      borderRadius: '4px',
      border: '1px solid #ccc',
      boxSizing: 'border-box',
    },
    eyeIcon: {
      position: 'absolute',
      right: '10px',
      top: '50%',
      transform: 'translateY(-50%)',
      cursor: 'pointer',
    },
    button: {
      width: '100%',
      padding: '10px',
      backgroundColor: '#4CAF50',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
  };

  // If logged in, navigate to /dashboard
  if (isLoggedIn) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div style={styles.container}>
      <h1>Login</h1>
      <form style={styles.form}>
        <label>
          Email:
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
        </label>
        <label>
          Password:
          <div style={{ position: 'relative' }}>
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
            />
            {showPassword ? (
              <FaEyeSlash style={styles.eyeIcon} onClick={togglePasswordVisibility} />
            ) : (
              <FaEye style={styles.eyeIcon} onClick={togglePasswordVisibility} />
            )}
          </div>
        </label>
        <button type="button" onClick={handleLogin} style={styles.button}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
