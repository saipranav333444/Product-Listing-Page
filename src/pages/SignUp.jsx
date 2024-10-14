// src/pages/SignUp.js
import Logo from'./Logo.png'

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';



const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = () => {
    // Save user credentials in local storage
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    alert('Sign up successful! You can now sign in.');
    navigate('/signin'); // Redirect to sign-in page
  };

  // Inline styles
  const styles = {
    signupContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#000', // Black background
    },
    formContainer: {
      backgroundColor: 'rgba(255, 255, 255, 0.1)', // White with transparency
      borderRadius: '8px',
      padding: '20px',
      boxShadow: '0 0 15px rgba(255, 255, 255, 0.2)', // Subtle shadow
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '90%', // Responsive width
      maxWidth: '400px', // Max width for larger screens
    },
    h2: {
      color: '#fff', // White text color for the heading
      marginBottom: '20px', // Space between heading and inputs
    },
    input: {
      marginBottom: '10px',
      padding: '10px',
      border: 'none',
      borderRadius: '4px', // Rounded input fields
      width: '100%', // Full width
    },
    button: {
      padding: '10px',
      backgroundColor: '#007bff', // Blue button
      color: '#fff', // White text
      border: 'none',
      borderRadius: '4px', // Rounded button
      cursor: 'pointer',
      width: '100%', // Full width
    },
  };

  return (
    <div style={styles.signupContainer}>

      <div style={styles.formContainer}>
        <img src={Logo} alt="image-1"/>
        <br/>
        <h2 style={styles.h2}>Sign Up</h2>
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
        <button style={styles.button} onClick={handleSignUp}>Sign Up</button>
      </div>
    </div>
  );
};

export default SignUp;
