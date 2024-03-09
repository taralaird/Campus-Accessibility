import { Button } from "@mui/base";
import React from "react";
import Toast from 'react-bootstrap/Toast';
import { X } from "react-bootstrap-icons";
import axios from "axios";

export default function Report(props) {
    return (
        <Toast style={{"width": "100%",  "opacity": "100%"}}>
            <Toast.Header closeButton={false} >
                <h1 style={{"color": "black", "font-size": "2rem"}}> {props.reportTitle}</h1>
            </Toast.Header>
            <Toast.Body class="align-items-center bg-white" style={{"padding": "0.5rem"}}>
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
                <h4>Building: {props.buildingName}</h4>
                <h5>Report Type: {props.reportType === "1" ? "Washroom Complaint" : props.reportType === "2" ? "Elevator Complaint" : props.reportType === "3" ? "Automatic Door Complaint" : props.reportType ? "General Complaint" : "error"}</h5>
                <p>{props.reportDate}</p>
                <p>Report Details: {props.issueDetails}</p>
            </Toast.Body>
        </Toast>
    )
};
