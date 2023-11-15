import React from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

function MainMenu() {
    return (
        <div>
            <h1>Campus Accessibility</h1>
            <Link to="/createReport" ><Button variant="info">Create Account</Button></Link>
        </div>
    )
}

export default MainMenu;