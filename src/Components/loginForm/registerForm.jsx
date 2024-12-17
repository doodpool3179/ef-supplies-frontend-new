import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './loginForm.css';
import Nav from '../Navbar/Navbar.jsx'
import { Link } from 'react-router-dom';

const RegisterPage = () => {
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3001/api/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });
        if (response.ok) {
            navigate('/login');
        } else {
            console.error('Registration failed');
        }
        } catch (error) {
            console.error('Error:', error);
        }
    };
  
    return(
    <div>
        <Nav></Nav>
        <div className='wrapper'>
            <form onSubmit={handleSubmit}>
                <h1>Register</h1>
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