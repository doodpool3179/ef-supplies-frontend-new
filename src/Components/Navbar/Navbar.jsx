import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ isLoggedIn, setIsLoggedIn, cart, user }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    try {
      console.log("Logging out...");
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('user');
      console.log("Before setIsLoggedIn:", isLoggedIn);
      setIsLoggedIn(false);
      console.log("After setIsLoggedIn:", isLoggedIn);
      navigate('/login'); // Redirect to login
      console.log("Navigating to login...");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
   <> 
    {isLoggedIn && (
      <header className="header">
        <a href="/" className="logo">EF Supplies</a>
        <nav className="navbar">
            <span className="greeting">Hi, User</span>
              <Link to="/cart" className="cart">
                Bag (0)
              </Link>
              <Link onClick={handleLogout} className="logout">
                Logout
              </Link>
        </nav>
      </header>
  )}
    {!isLoggedIn && (
      <>
      </>
    )}
    </>
  );
};

export default Navbar;
