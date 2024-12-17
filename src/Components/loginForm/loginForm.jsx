import React from "react";
import logincss from './loginForm.css';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    return(
    <div>
        <link rel="stylesheet" href="loginForm.css"></link>
        <div className='wrapper'>
            <form action="" meathod="get">
                <h1>Login</h1>
                <div className= "input-box">
                    <input type="text"
                    placeholder='Username' required></input>
                </div>                
                <div className= "input-box">
                    <input type="password"
                    placeholder='Password' required></input>
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