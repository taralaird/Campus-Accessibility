import React from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import HeaderLogo from "./HeaderLogo";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import "../styles.css";


function NavMenu(){

    return(
        <div className="nav-menu">
            <div className="logo-container">
                <HeaderLogo />
            </div>
            <div className ="button-container">
            <ButtonGroup vertical>
            <Button variant="link" className="button"><Link to="/help" className="button-link">Help?</Link></Button>
            <Button variant="link" className="button"><Link to="/map" className="button-link">View Map</Link></Button>
            <Button variant="link" className="button"><Link to="/createReport" className="button-link">Create Report</Link></Button>
            <Button variant="link" className="button"><Link to="/trends" className="button-link">View Trends</Link></Button>
            <Button variant="link" className="button"><Link to="/reports" className="button-link">View Reports</Link></Button>
            <Button variant="link" className="button"><Link to="/predictor" className="button-link">Predictor Model</Link></Button>
            <Button variant="link" className="button"><Link to="/delete" className="button-link">Admin Login</Link></Button>
            </ButtonGroup>
            </div>
        </div>
    )
}
export default NavMenu;