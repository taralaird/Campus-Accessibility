import { Button } from "@mui/base";
import React from "react";
import Toast from 'react-bootstrap/Toast';
import { X } from "react-bootstrap-icons";
import axios from "axios";

export default function Report(props) {
    return (
        <Toast style={{"width": "100%"}}>
            <Toast.Header closeButton={false} >
                <h1 style={{"color": "black", "font-size": "2rem"}}>{props.reportTitle}</h1>
            </Toast.Header>
            <Toast.Body>
                {props.page==="delete" ? <Button onClick={() => {
                    axios.delete("http://localhost:8081/delete", {params: {Reportid: props.id}})
                    .then((res) => {
                        alert("Report deleted");
                        window.location.reload();
                    })
                    .catch((err) => {
                        alert("Error");
                        window.location.reload();
                    })
                }}><X /></Button>: null}
                <h3>{props.buildingName}</h3>
                <h3>{props.reportType === "1" ? "Washroom Complaint" : props.reportType === "2" ? "Elevator Complaint" : props.reportType === "3" ? "Automatic Door Complaint" : props.reportType ? "General Complaint" : "error"}</h3>
                <p>{props.issueDetails}</p>
            </Toast.Body>
        </Toast>
    )
};
