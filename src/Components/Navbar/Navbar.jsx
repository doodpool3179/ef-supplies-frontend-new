import React from "react";
import './Navbar.css'

const Navbar = () => {
    return(
        <header className="header">
            <a href="/" className="logo">Education First</a>

            <nav className="navbar">
                <a href="/">Home</a>
                <a href="/login">Login</a>
                <a href="/Register">Register</a>
            </nav>
        </header>

    )
}

export default Navbar