import React from "react";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

export default function ViewTrends() {
    return (
        <div>
            <h1>Trends</h1>
            <Link to="/" ><Button variant="info">Return to Homepage</Button></Link>
        </div>
    )
}