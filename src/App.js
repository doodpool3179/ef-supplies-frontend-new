import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './Components/loginForm/loginForm.jsx';
import Home from './Components/Home/Homev2.jsx';
import Payment from './Components/Payment/payment.jsx';
import RegisterPage from './Components/loginForm/registerForm.jsx';


function App() {
  const isLoggedIn = !!localStorage.getItem('isLoggedIn'); // Check login status

  return (
    <Router>
      <Routes>
        <Route path="/" element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;