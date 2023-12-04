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
      <h2 style={{ "background-color": "rgb(75, 160, 181)", "color":"#fff", "font-weight": "bold"}}>{props.buildingName} Information</h2>
      </div>
      <div style={{ "width": "100%",  "overflow":"auto"}}>
        <h4>{"Severity: " + colour}</h4>
                <h4>{props.floors? Number(props.floors) + " Floors": ""}</h4>
                <h4>{props.elevators? Number(props.elevators) + " Elevators": ""}</h4>
                <h4>{props.barrierFreeWashrooms? "Barrier Free Washrooms" : ""}</h4>
                <h4>{props.genderNeutralWashrooms? "Gender Neutral Washrooms" : ""}</h4>
                <h4>{props.automaticButtonEntry? "Automatic Button Entry" : ""}</h4>
                </div>
        </div>
    )
};
