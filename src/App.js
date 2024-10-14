import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Skills from './pages/Skills'

import About from './pages/About'

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    const signedInStatus = localStorage.getItem('isSignedIn');
    setIsSignedIn(signedInStatus === 'true');
  }, []);

  return (
    <Router>
      <Routes>
        
        <Route path="/signin" element={<SignIn setIsSignedIn={setIsSignedIn} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={isSignedIn ? <Home /> : <Navigate to="/signin" />} />
        <Route path="/skills" element={isSignedIn ? <Skills /> : <Navigate to="/signin" />} />
        <Route path="/about" element={isSignedIn ? <About /> : <Navigate to="/signin" />} />
        <Route path="/stories" element={isSignedIn ? <About /> : <Navigate to="/signin" />} />
        <Route path="/contact" element={isSignedIn ? <About /> : <Navigate to="/signin" />} />
        
      </Routes>
    </Router>
  );
};

export default App;
