import React from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import HeaderLogo from "./HeaderLogo";

function MainMenu() {
    return (
        <div>
            <HeaderLogo />
            <h1>Campus Accessibility</h1>
            <Link to="/createReport" ><Button variant="info">Create Report</Button></Link>
            <br />
            <br />
            <Link to="/adminLogin" ><Button variant="info">Admin Login</Button></Link>
            <br />
            <br />
            <Link to="/predictor" ><Button variant="info">Predictor Model</Button></Link>
            <br />
            <br />
            <Link to="/trends" ><Button variant="info">View Trends</Button></Link>
            <br />
            <br />
            <Link to="/map" ><Button variant="info">View Map</Button></Link>
            <br />
            <br />
            <Link to="/reports" ><Button variant="info">View Reports</Button></Link>
        </div>
    )
}

export default MainMenu;