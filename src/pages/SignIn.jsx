import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from './Logo.png';

const SignIn = ({ setIsSignedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = () => {
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    if (email === storedEmail && password === storedPassword) {
      // User credentials match
      localStorage.setItem('isSignedIn', 'true'); // Set sign-in status
      setIsSignedIn(true); // Update the app state
      navigate('/'); // Redirect to the layout page
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  const handleSignUp = () => {
    navigate('/signup');
  }

  const styles = {
    signinContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#000',
    },
    formContainer: {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '8px',
      padding: '20px',
      boxShadow: '0 0 15px rgba(255, 255, 255, 0.2)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '90%',
      maxWidth: '400px',
    },
    h2: {
      color: '#fff',
      marginBottom: '20px',
    },
    input: {
      marginBottom: '10px',
      padding: '10px',
      border: 'none',
      borderRadius: '4px',
      width: '100%',
    },
    button: {
      padding: '10px',
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      width: '100%',
    },
  };

  return (
    <div style={styles.signinContainer}>
      <img src={Logo} alt="logo" />
      <div style={styles.formContainer}>
        <h2 style={styles.h2}>Sign In</h2>
        <input
          style={styles.input}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          style={styles.input}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button style={styles.button} onClick={handleSignIn}>Sign In</button>
        <h2 style={styles.h2}>Dont have an account</h2>
        <button style={styles.button} onClick={handleSignUp}>Sign Up</button>
      </div>
    </div>
  );
};

export default SignIn;
