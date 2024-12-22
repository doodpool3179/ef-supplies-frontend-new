import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './Components/loginForm/loginForm.jsx';
import Home from './Components/Home/Homev3.jsx';
import RegisterPage from './Components/loginForm/registerForm.jsx';
import Payment from './Components/Payment/payment.jsx';
import Navbar from './Components/Navbar/Navbar.jsx'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('isLoggedIn'));
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('user')) || {});

  useEffect(() => {
    const handleStorageChange = () => {
      setIsLoggedIn(!!localStorage.getItem('isLoggedIn'));
      setUser(JSON.parse(localStorage.getItem('user')) || {});
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);
  console.log('isLoggedIn in App:', isLoggedIn);


  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} user={user} />
      <Routes>
        <Route path="/" element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn} setUser={setUser}/>} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/payment" element={isLoggedIn ? <Payment /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;