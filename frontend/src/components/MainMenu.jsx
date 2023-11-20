import React from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import HeaderLogo from "./HeaderLogo";
import ButtonGroup from "react-bootstrap/ButtonGroup";

function MainMenu() {
    return (
            <div class="row">
                <div class="column">
            <HeaderLogo />
            </div>
            <div class ="column" style ={{ "float": "right"}}>
            <ButtonGroup vertical>
            <Button variant="info"><Link to="/createReport" style= {{"textDecoration" :"none", "color":"black"}}>Create Report</Link></Button>
            <Button variant="info"><Link to="/adminLogin" style= {{"textDecoration" :"none", "color":"black"}}>Admin Login</Link></Button>
            <Button variant="info"><Link to="/predictor" style= {{"textDecoration" :"none", "color":"black"}}>Predictor Model</Link></Button>
            <Button variant="info"><Link to="/trends" style= {{"textDecoration" :"none", "color":"black"}}>View Trends</Link></Button>
            <Button variant="info"><Link to="/map" style= {{"textDecoration" :"none", "color":"black"}}>View Map</Link></Button>
            <Button variant="info"><Link to="/reports" style= {{"textDecoration" :"none", "color":"black"}}>View Reports</Link></Button>
        </ButtonGroup>
        </div>
        </div>
    )
}

export default MainMenu;