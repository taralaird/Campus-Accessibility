import React from "react";
import Toast from 'react-bootstrap/Toast';

export default function Report(props) {
    return (
        <Toast style={{"width": "100%"}}>
            <Toast.Header closeButton={false} >
                <h1 style={{"color": "black", "font-size": "2rem"}}>{props.reportTitle}</h1>
            </Toast.Header>
            <Toast.Body>
                <h3>{props.buildingName}</h3>
                <h3>{props.reportType === "1" ? "Washroom Complaint" : props.reportType === "2" ? "Elevator Complaint" : props.reportType === "3" ? "Automatic Door Complaint" : props.reportType ? "General Complaint" : "error"}</h3>
                <p>{props.issueDetails}</p>
            </Toast.Body>
        </Toast>
    )
};
