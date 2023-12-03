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
import Report from "./Report";
import Toast from 'react-bootstrap/Toast';
import { ArrowsAngleContract } from "react-bootstrap-icons";
import "../styles.css";

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
        let styling = {};
        switch (value) {
            case "3M":
                styling = {"position": "absolute", "top": "52%", "left": "34%", "transform": "translate(0%, 0%)"}
                break;
            case "Advanced Faculty For Avian Research":
                styling = {"position": "absolute", "top": "31%", "left": "21.2%", "transform": "translate(0%, 0%)"}
                break;
            case "Alumni Hall":
                styling = {"position": "absolute", "top": "58%", "left": "30.5%", "transform": "translate(0%, 0%)"}
                break;
            case "Amit Chakma Engineering":
                styling = {"position": "absolute", "top": "63%", "left": "23.2%", "transform": "translate(0%, 0%)"}
                break;
            case "Arts and Humanity Building":
                styling = {"position": "absolute", "top": "54%", "left": "37.5%", "transform": "translate(0%, 0%)"}
                break;
            case "Biological and Geological Sciences Building":
                styling = {"position": "absolute", "top": "39%", "left": "44%", "transform": "translate(0%, 0%)"}
                break;
            case "Chemistry Building":
                styling = {"position": "absolute", "top": "35%", "left": "44%", "transform": "translate(0%, 0%)"}
                break;
            case "Claudette Mackay-Lassonde Pavilion":
                styling = {"position": "absolute", "top": "61%", "left": "27%", "transform": "translate(0%, 0%)"}
                break;
            case "Clinical Skills Building (Dr. Don Rix)":
                styling = {"position": "absolute", "top": "39%", "left": "36%", "transform": "translate(0%, 0%)"}
                break;
            case "D.B. Weldon Library":
                styling = {"position": "absolute", "top": "48%", "left": "30%", "transform": "translate(0%, 0%)"}
                break;
            case "Dental Sciences Building":
                styling = {"position": "absolute", "top": "33.5%", "left": "38%", "transform": "translate(0%, 0%)"}
                break;
    }
        return (
            <Button className= "buttons"  variant={buttonVariant(0, false)} style={styling} onClick={() => { setBuilding(value); }}></Button>
        )
    });
    // TODO: style this group
    const buttonGroup = (
        <ButtonGroup >{buttons}</ButtonGroup>
    )


    const issueDetails = "whatever";
    return (

        <body>
            <main>
                <div>
                    <NavMenu />
                    <div className="mapPage">
                        <div className="map-container">
                            <img className="campus-map" alt={"Campus Map"} src={CampusMap} />
                            <div >{buttons}</div>
                        </div>
                        <div className="infoContainer">
                                <Autocomplete disablePortal
                                    onChange={(e) => { setBuilding(e.target.outerText) }}
                                    id="combo-box-demo"
                                    options={sortedNames}
                                    renderInput={(params) => <TextField {...params} label="Building" />}
                                />
                                <div className="info">
                                <BuildingInfo style={{ "width": "100%", "height": "30%","overflow":"auto"}} buildingName={building} severity={buttonVariant(0)} floors={3} elevators ={3} barrierFreeWashrooms = {"Yes"} genderNeutralWashrooms ={"Yes"} automaticButtonEntry = {"No"}/>
                            <div style={{ "width": "100%", "background-color": "rgb(75, 160, 181)", "color":"#fff"}}>
                                    <h2 style= {{"overflow":"auto"}}>Reports for {building}</h2>
                            </div>
                            <div className={"reports"}>
                                <Report issueDetails={issueDetails} buildingName={"sample building"} reportTitle={"Cafeteria Overflow"} reportType={"Washroom Complaints"} />
                                <Report issueDetails={issueDetails} buildingName={"sample building"} reportTitle={"Cafeteria Overflow"} reportType={"Washroom Complaints"} />
                                <Report issueDetails={issueDetails} buildingName={"sample building"} reportTitle={"Cafeteria Overflow"} reportType={"Washroom Complaints"} />
                                <Report issueDetails={issueDetails} buildingName={"sample building"} reportTitle={"Cafeteria Overflow"} reportType={"Washroom Complaints"} />
                            </div>
                            </div>
                        </div>
                    </div>
                    <br />

                    <br />
                    <Link to="/" ><Button variant="info">Return to Homepage</Button></Link>
                </div>
            </main>
            <Footer />
        </body>

    )
}