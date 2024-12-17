import React from "react";
import logincss from './loginForm.css';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
    return(
    <div>
        <link rel="stylesheet" href="loginForm.css"></link>
        <div className='wrapper'>
            <form action="" meathod="get">
                <h1>Register</h1>
                <div className= "input-box">
                    <input type="text"
                    placeholder='Username' required></input>
                </div>                
                <div className= "input-box">
                    <input type="password"
                    placeholder='Password' required></input>
                </div>
                <div className= "input-box">
                    <input type="email"
                    placeholder='Email' required></input>
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