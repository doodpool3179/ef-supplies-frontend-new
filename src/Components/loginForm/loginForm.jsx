import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './loginForm.css';
import Nav from '../Navbar/Navbar'
import { Link } from 'react-router-dom';

const LoginPage = ({ setIsLoggedIn }) => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Client-side validation
        if (!formData.email || !formData.password) {
            setError('Both fields are required.');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setError('Invalid email format.');
            return;
        }
        // Clear errors and make API call
        setError('');
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}api/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                localStorage.setItem('isLoggedIn', 'true');
                navigate('/'); // Redirect to Home page
            } else {
                setError('Invalid email or password.');
            }
        } catch (error) {
            setError('An error occurred. Please try again later.');
            console.error(error);
        }
    };

    return(
        <div className="login-container">
        <div className="welcome-section">
            <h1>Welcome Back!</h1>
            <p>Access to all your needs is just a few clicks away.</p>
        </div>
        <div className="form-section">
            <form onSubmit={handleSubmit} novalidate>
                <h1>Login</h1>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <div className= "input-box">
                    <input
                        type="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                    />
                </div>                
                <div className= "input-box">
                    <input
                        type="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        required
                    />
                </div>
                <div className= "remember-forget">
                    <label><input type="checkbox" />Remember me</label>
                    <a>Forget password?</a>
                </div>

                <button type="submit">Login</button>

                <div className="register-link">
                    <p>Don't have an account? <a href="/Register">Register</a></p>
                </div>
            </form>
        </div>
    </div>
    );
};

export default LoginPage;