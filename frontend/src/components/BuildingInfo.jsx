import React from 'react';
import Toast from 'react-bootstrap/Toast';

export default function BuildingInfo(props) {
    const severity = String(props.severity);
    const colour = severity.includes("info")? 
    "Low" : severity.includes("warning")? 
    "Moderate": severity.includes("danger")? 
    "Severe" : "error";
    

    return (
    <div>
        <div> 
      <h2 style={{ "background-color": "rgb(75, 160, 181)", "color":"#fff", "font-weight": "bold"}}>{props.buildingName} Information</h2>
      </div>
      <div style={{ "width": "100%",  "overflow":"auto"}}>
        <h4>{"Report Severity: " + colour}</h4>
                <h4>{props.floors? "Floors: "+ Number(props.floors): ""}</h4>
                <h4>{props.elevators? "Elevators: "+ Number(props.elevators): ""}</h4>
                <h4>{props.barrierFreeWashrooms? "Barrier Free Washrooms: Yes" : "Barrier Free Washrooms: No"}</h4>
                <h4>{props.genderNeutralWashrooms? "Gender Neutral Washrooms: Yes" : "Gender Neutral Washrooms: No"}</h4>
                <h4>{props.automaticButtonEntry? "Automatic Button Entry: Yes" : "Automatic Button Entry: No"}</h4>
                </div>
        </div>
    )
};
