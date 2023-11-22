import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import HeaderLogo from "./HeaderLogo";
import BuildingDropdown from "./BuildingDropdown";
import CampusMap from "../images/Campus_Map.png";
import { buildingNames } from "../constants/BuildingNames";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import BarChart from "./BarChart";

export default function ViewMap() {
    let initialBuilding = null;
    if (buildingNames && buildingNames[0]) {
        initialBuilding = buildingNames[0];
    }
    const [building, setBuilding] = useState(initialBuilding);
    const buttons = buildingNames.map((value, index) => {
        return (
            <Button size="sm" variant="outline-success" onClick={() => {setBuilding(value);}}>{value}</Button>
        )
    });
    // TODO: style this group
    const buttonGroup = (
        <ButtonGroup >{buttons}</ButtonGroup>
    )
    

    return (
        <div>
            <HeaderLogo />
            <h1>Map</h1>
            <BuildingDropdown />
            <br />
            <div>
                <img alt={"Campus Map"} src={CampusMap} style={{"height": 500, "width": "auto", "margin-top": 0}} />
                <BarChart buildingName={building} title={`${building} Report Trend`} subtitle={"sample subtitle"} note={"sample note"} />
            </div>
            <br />
            {buttonGroup}
            <br />
            <Link to="/" ><Button variant="info">Return to Homepage</Button></Link>
        </div>
    )
}