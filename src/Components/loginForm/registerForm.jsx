import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './loginForm.css';
import Nav from '../Navbar/Navbar.jsx'
import { Link } from 'react-router-dom';
import { AiFillInstagram } from "react-icons/ai";

const RegisterPage = () => {
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Client-side validation
        if (!formData.name || !formData.email || !formData.password) {
            setError('All fields are required.');
            return;
        }
      
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setError('Invalid email format.');
            return;
        }
      
        if (formData.password.length < 6 || formData.password.length > 20) {
            setError('Password must be between 6 and 20 characters long.');
            return;
        }

        if (!/[a-z]/.test(formData.password)) {
            setError("Password must contain at least one lowercase letter.")
            return;
        }

        if (!/[A-Z]/.test(formData.password)) {
            setError("Password must contain at least one uppercase letter.")
            return;
        }

        if (!/\d/.test(formData.password)) {
            setError("Password must contain at least one number.")
            return;
        }

        if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(formData.password)) {
            setError("Password must contain at least one special character.")
            return;
        }
      
        // Clear errors and make API call
        setError('');
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/api/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });
        if (response.ok) {
            navigate('/login');
        } else {
            const data = await response.json();
            setError(data.error || 'Registration failed.');
        }
        } catch (error) {
            setError('An error occurred. Please try again later.');
            console.error(error);
        }
    };
    
    return(
        <div className="login-container">
            <div className="welcome-section">
                <h1>Welcome To EF Supplies!</h1>
                <p>Our company speciallizes in creating curated packages to kick off your forgein experience.</p>
                <br></br>
                <p>Feel like our packages are too big? choose to checkout with our carfully gathered single products selection.</p>
                <br></br>
                <p>Access to all your needs is just a few clicks away.</p>
                <br></br><br></br>
                <p>Check out our social media for more information about us:</p>
                <div className="icons">
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <AiFillInstagram size={40} />
                    </a>
                </div>
            </div>
            <div className="form-section">
                <form onSubmit={handleSubmit} novalidate>
                    <h1>Register</h1>
                    {error && <p className="error-message">{error}</p>}
                    <div className= "input-box">
                        <input
                            type="text"
                            placeholder="Name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            novalidate
                        />
                    </div>                
                    <div className= "input-box">
                        <input
                            type="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            novalidate
                        />
                    </div>
                    <div className= "input-box">
                        <input
                            type="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            novalidate
                        />
                    </div>  


                    <button type="submit">Register</button>

                    <div className="register-link">
                        <p>Have an account? <a href="/">Login</a></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;