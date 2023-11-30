import React from "react";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import HeaderLogo from "./HeaderLogo";
import ContactFooter from "./ContactFooter";

export default function Predictor() {
    return (
        <div>
            <HeaderLogo />
            <h1>Predictor</h1>
            <Link to="/" ><Button variant="info">Return to Homepage</Button></Link>
            <ContactFooter />
        </div>
    )
}