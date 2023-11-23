import React from 'react';
import Toast from 'react-bootstrap/Toast';

export default function BuildingInfo(props) {
    const severity = String(props.severity);
    const colour = severity.includes("success")? 
    "green" : severity.includes("warning")? 
    "yellow": severity.includes("danger")? 
    "red" : "error";
    

    return (
        <Toast>
            <Toast.Header closeButton={false}>
                <h1>{props.buildingName}</h1>
            </Toast.Header>
            <Toast.Body>
                <h3>{"Severity: " + colour}</h3>
                <h3>{props.floors? Number(props.floors) + " Floors": ""}</h3>
                <h3>{props.barrierFreeWashrooms? "Barrier Free Washrooms" : ""}</h3>
                <h3>{props.genderNeutralWashrooms? "Gender Neutral Washrooms" : ""}</h3>
                <h3>{props.automaticButtonEntry? "Automatic Button Entry" : ""}</h3>
            </Toast.Body>
        </Toast>
    )
};
