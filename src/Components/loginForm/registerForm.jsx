import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './loginForm.css';
import Nav from '../Navbar/Navbar.jsx'
import { Link } from 'react-router-dom';

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
      
        if (formData.password.length < 6) {
            setError('Password must be at least 6 characters long.');
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
    <div>
        <div className='wrapper'>
            <form onSubmit={handleSubmit}>
                <h1>Register</h1>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <div className= "input-box">
                    <input
                        type="text"
                        placeholder="Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                    />
                </div>                
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