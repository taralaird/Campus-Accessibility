import React from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import HeaderLogo from "./HeaderLogo";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import MapImage from "../images/Campus_Map_2-1.png";
import { ArrowsAngleExpand } from 'react-bootstrap-icons';
import "../styles.css";



function MainMenu() {
  
  
    return (
        <div className="main-page">
            <div className="nav-menu">
                <div className="logo-container">
            <HeaderLogo />
                </div>
                <div className ="button-container">
                <ButtonGroup vertical>
                <Button variant="link" className="button"><Link to="/createReport" className="button-link">Create Report</Link></Button>
                <Button variant="link" className="button"><Link to="/adminLogin" className="button-link">Admin Login</Link></Button>
                <Button variant="link" className="button"><Link to="/predictor" className="button-link">Predictor Model</Link></Button>
                <Button variant="link" className="button"><Link to="/trends" className="button-link">View Trends</Link></Button>
                <Button variant="link" className="button"><Link to="/map" className="button-link">View Map</Link></Button>
                <Button variant="link" className="button"><Link to="/reports" className="button-link">View Reports</Link></Button>
                </ButtonGroup>
                </div>
            </div>

            <div className="content">



            <div className="map-sec">
            <img
              src={MapImage} alt="Map" style={{ cursor: 'pointer' }}/>
        <Button variant="info" className="expand-button" >
          Expand Map <ArrowsAngleExpand />
        </Button>
      </div>

                <div className="newest-sec">

                    <div className="newest1">
                        <h2>Newest Trends</h2>
                        <div>
                        <div className="image-placeholder">
                                <p>Image Placeholder</p>
                            </div>
                        </div>
                    </div>
                    <div className="newest2">
                        <h2>Newest Reports</h2>
                        <div>
                        <div className="image-placeholder">
                                <p>Image Placeholder</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}




export default MainMenu;