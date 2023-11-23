import React from "react";
import Toast from 'react-bootstrap/Toast';

export default function Report(props) {
    return (
        <Toast style={{"width": "100%"}}>
            <Toast.Header closeButton={false}>
                <h1>{props.reportTitle}</h1>
            </Toast.Header>
            <Toast.Body>
                <h3>{props.buildingName}</h3>
                <h3>{props.reportType}</h3>
                <p>{props.issueDetails}</p>
            </Toast.Body>
        </Toast>
    )
};
