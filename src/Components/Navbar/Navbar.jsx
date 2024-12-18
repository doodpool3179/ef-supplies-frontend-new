import React from "react";
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <header className="header">
      <a href="/" className="logo">EF Supplies</a>

      <nav className="navbar">
        <Link to="/">Home</Link>
        {!isLoggedIn && <Link to="/login">Login</Link>}
        {!isLoggedIn && <Link to="/register">Register</Link>}
        {isLoggedIn && <Link onClick={handleLogout}>Logout</Link>}
      </nav>
    </header>
  );
};

export default Navbar;
