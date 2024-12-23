import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './Components/loginForm/loginForm.jsx';
import Home from './Components/Home/Homev3.jsx';
import RegisterPage from './Components/loginForm/registerForm.jsx';
import Payment from './Components/Payment/payment.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
import Cart from './Components/Cart/cart.jsx';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('isLoggedIn'));
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('user')) || {});
  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem('cart')) || []);

  useEffect(() => {
    const handleStorageChange = () => {
      setIsLoggedIn(!!localStorage.getItem('isLoggedIn'));
      setUser(JSON.parse(localStorage.getItem('user')) || {});
      setCart(JSON.parse(localStorage.getItem('cart')) || []);
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  // Sync cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.product_id === product.product_id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.product_id === product.product_id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [
        ...prevCart,
        { ...product, price: parseFloat(product.price), quantity: 1 } // Ensure price is a number
      ];
    });
  };
  

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.product_id !== productId));
  };

  const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  


  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} user={user} cart={cart} />
      <Routes>
        <Route
          path="/"
          element={isLoggedIn ? <Home addToCart={addToCart} /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={<LoginPage setIsLoggedIn={setIsLoggedIn} setUser={setUser} />}
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/payment"
          element={isLoggedIn ? <Payment /> : <Navigate to="/login" />}
        />
        <Route
          path="/cart"
          element={
            isLoggedIn ? (
              <Cart
                cart={cart}
                removeFromCart={removeFromCart}
                totalAmount={totalAmount}
              />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
