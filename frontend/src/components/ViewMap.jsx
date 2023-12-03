import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import HeaderLogo from "./HeaderLogo";
import CampusMap from "../images/Campus_Map.png";
import { buildingNames } from "../constants/BuildingNames";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import buttonVariant from "../functions/buttonVariant";
import { Autocomplete, TextField } from "@mui/material";
import BuildingInfo from "./BuildingInfo";
import "../stylesheets/ViewMap.css";
import BuildingDropdown from "./BuildingDropdown";
import NavMenu from "./NavMenu";
import Footer from "./Footer";

/* once we have a backend, we should build a map
   with the building name as key and the number of issues as value */




export default function ViewMap() {
    let initialBuilding = null;
    const sortedNames = buildingNames.sort();
    if (sortedNames && sortedNames[0]) {
        initialBuilding = sortedNames[0];
    }
    const [building, setBuilding] = useState(initialBuilding);
    const buttons = sortedNames.map((value, index) => {
        return (
            <Button size="sm" variant={buttonVariant(0, true)} onClick={() => {setBuilding(value);}}>{value}</Button>
        )
    });
    // TODO: style this group
    const buttonGroup = (
        <ButtonGroup >{buttons}</ButtonGroup>
    )
    

    return (

        <body>
            <main>
                <div>
                    <NavMenu/>
                    <h1>Map</h1>
                    <Autocomplete disablePortal
                    onChange={(e) => {setBuilding(e.target.outerText)}}
                    id="combo-box-demo"
                    options={sortedNames}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Building" />}
                />
            <br />
            <div>
                <img className="campus-map" alt={"Campus Map"} src={CampusMap} />
                <BuildingInfo buildingName={building} severity={buttonVariant(0)} />
            </div>
            <br />
            {buttonGroup}
            <br />
                    <Link to="/" ><Button variant="info">Return to Homepage</Button></Link>
                </div>
            </main>
            <Footer />
        </body>

    )
}