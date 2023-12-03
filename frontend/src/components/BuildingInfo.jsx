import React from 'react';
import Toast from 'react-bootstrap/Toast';

export default function BuildingInfo(props) {
    const severity = String(props.severity);
    const colour = severity.includes("success")? 
    "low" : severity.includes("warning")? 
    "moderate": severity.includes("danger")? 
    "severe" : "error";
    

    return (
    <div>
        <div> 
      <h2 style={{ "background-color": "rgb(75, 160, 181)", "color":"#fff"}}>{props.buildingName} Information</h2>
      </div>
      <div style={{ "width": "100%",  "overflow":"auto"}}>
        <h3>{"Severity: " + colour}</h3>
                <h3>{props.floors? Number(props.floors) + " Floors": ""}</h3>
                <h3>{props.elevators? Number(props.elevators) + "Elevators": ""}</h3>
                <h3>{props.barrierFreeWashrooms? "Barrier Free Washrooms" : ""}</h3>
                <h3>{props.genderNeutralWashrooms? "Gender Neutral Washrooms" : ""}</h3>
                <h3>{props.automaticButtonEntry? "Automatic Button Entry" : ""}</h3>
                </div>
        </div>
    )
};
