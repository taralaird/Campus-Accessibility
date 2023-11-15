import React from "react";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

export default function Predictor() {
    return (
        <div>
            <h1>Predictor</h1>
            <Link to="/" ><Button variant="info">Return to Homepage</Button></Link>
        </div>
    )
}