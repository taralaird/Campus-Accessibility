import React from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import HeaderLogo from "./HeaderLogo";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import "../styles.css";

function MainMenu() {
    return (
            <div class="row">
                <div class="column">
            <HeaderLogo />
            </div>
            <div class ="column">
            <ButtonGroup vertical>
            <Button variant="info" ><Link to="/createReport">Create Report</Link></Button>
            <Button variant="info"><Link to="/adminLogin">Admin Login</Link></Button>
            <Button variant="info"><Link to="/predictor">Predictor Model</Link></Button>
            <Button variant="info"><Link to="/trends">View Trends</Link></Button>
            <Button variant="info"><Link to="/map" >View Map</Link></Button>
            <Button variant="info"><Link to="/reports">View Reports</Link></Button>
        </ButtonGroup>
        </div>
        </div>
    )
}

export default MainMenu;