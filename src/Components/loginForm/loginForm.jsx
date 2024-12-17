import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './loginForm.css';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3001/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
        });
        if (response.ok) {
            localStorage.setItem('isLoggedIn', 'true'); // Store login token
            navigate('/'); // Redirect to Home page
        } else {
            console.error('Login failed');
        }
        } catch (error) {
          console.error('Error:', error);
        }
    };

    return(
    <div>
        <div className='wrapper'>
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
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
                    <a href="#">Forget password?</a>
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