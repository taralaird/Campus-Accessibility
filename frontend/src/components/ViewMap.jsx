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
/* once we have a backend, we should build a map
   with the building name as key and the number of issues as value */

export default function ViewMap() {
    let initialBuilding = null;
    if (buildingNames && buildingNames[0]) {
        initialBuilding = buildingNames[0];
    }
    const [building, setBuilding] = useState(initialBuilding);
    const buttons = buildingNames.map((value, index) => {
        return (
            <Button size="sm" variant={buttonVariant(0, true)} onClick={() => {setBuilding(value);}}>{value}</Button>
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
            <Autocomplete disablePortal
                    onChange={(e) => {setBuilding(e.target.outerText)}}
                    id="combo-box-demo"
                    options={buildingNames}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Building" />}
                />
            <br />
            <div>
                <img alt={"Campus Map"} src={CampusMap} style={{"height": 500, "width": "auto", "margin-top": 0}} />
                <BuildingInfo buildingName={building} severity={buttonVariant(0)} />
            </div>
            <br />
            {buttonGroup}
            <br />
            <Link to="/" ><Button variant="info">Return to Homepage</Button></Link>
        </div>
    )
}