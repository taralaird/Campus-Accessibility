import React from "react";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import MapImage from "../images/Campus_Map_2-1.png";
import { ArrowsAngleExpand } from "react-bootstrap-icons";
import "../styles.css";
import NavMenu from "./NavMenu";
import Footer from "./Footer";

function MainMenu() {
  
  
    return (
        <div className="main-page">
            <NavMenu/>
            <div className="content">
            <div className="map-sec">
            <img
              src={MapImage} alt="Map" style={{ cursor: 'pointer' }}/>
        <Button variant="info" className="expand-button" ><Link to="/map" className="expand-button-link">Expand Map</Link> <ArrowsAngleExpand /> </Button>
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
            <div>
                <Footer/>
            </div>
        </div>
        
        
    )
}




export default MainMenu;