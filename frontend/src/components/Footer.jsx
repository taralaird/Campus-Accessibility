import React from "react";
import Button from 'react-bootstrap/Button';
import "../styles.css";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className = "footer" >
            <p className="contact-us"><a href="mailto:campusaccessibility23@gmail.com" >Contact Us </a></p> 
            <Link to="/adminLogin" className="admin-login-button">Admin Login</Link>
        </div>
        )
    }
export default Footer;

