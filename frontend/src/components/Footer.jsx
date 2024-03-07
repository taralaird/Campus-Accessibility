import React from "react";
import "../styles.css";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className = "footer" >
            <footer>
            <p className="contact-us"><a href="mailto:campusaccessibility23@gmail.com" >Contact Us </a></p> 
            <Link to="/aboutUs" className="about-us-button">About Us</Link>
            </footer>
        </div>
        )
    }
export default Footer;

