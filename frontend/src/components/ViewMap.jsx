import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import HeaderLogo from "./HeaderLogo";
import BuildingDropdown from "./BuildingDropdown";
import CampusMap from "../images/Campus_Map.png";

export default function ViewMap() {
    const [building, setBuilding] = useState(null);

    return (
        <div>
            <HeaderLogo />
            <h1>Map</h1>
            <BuildingDropdown />
            <br />
            <div>
                <img alt={"Campus Map"} src={CampusMap} style={{"height": 500, "width": "auto"}} />
            </div>
            <br />
            <Link to="/" ><Button variant="info">Return to Homepage</Button></Link>
        </div>
    )
}