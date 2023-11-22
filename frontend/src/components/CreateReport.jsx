import React, { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import HeaderLogo from "./HeaderLogo";
import Autocomplete from "@mui/material/Autocomplete";
import { TextField } from "@mui/material";
import checkReportErrors from "../functions/createReportErrors";
import { buildingNames } from "../constants/BuildingNames";

function CreateReport() {

    const [title, setTitle] = useState(null);
    const [building, setBuilding] = useState(null);
    const [reportType, setReportType] = useState(null);
    const [issueDetails, setIssueDetails] = useState(null);

    const names = buildingNames.sort();

    return (
        <div>
            <HeaderLogo />
            <div style ={{ "margin": "0% 10% 0%"}}>
            <h1 style ={{"text-align":"center"}}>Create a New Report</h1>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Title</Form.Label>
                    <Form.Control onChange={(e) => {setTitle(e.target.value);}} placeholder="Please give your report a short title" />
                </Form.Group>

                <Form.Group className="mb-3">
                <Autocomplete disablePortal
                    onChange={(e) => {setBuilding(e.target.outerText)}}
                    id="combo-box-demo"
                    options={names}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Building" />}
                />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Report Type</Form.Label>
                    <Form.Select onChange={(e) => {setReportType(e.target.value);}} style={{"color": "grey"}}>
                        <option >Select the type of report you are making</option>
                        <option value="1">Washroom Complaint</option>
                        <option value="2">Elevator Complaint</option>
                        <option value="3">Automatic Door Complaint</option>
                        <option value="4">General Complaint</option>
                    </Form.Select>    
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Issue Details</Form.Label>
                    <Form.Control onChange={(e) => {setIssueDetails(e.target.value);}} placeholder="Share the details of the observed accessibility issue." />
                </Form.Group>

                <Button variant="outline-info" onClick={
                    () => {
                        const json = {
                            title,
                            building,
                            reportType,
                            issueDetails
                        }
                        const errors = checkReportErrors(title, building, reportType, issueDetails);
                        if (errors==="none") {
                            // TODO: send json to backend
                            console.log(json);
                        } else {
                            window.alert(errors);
                        }
                    }
                }>
                    Submit
                </Button>

            </Form>
            <br />
            <Link to="/map" ><Button variant="outline-danger">Cancel</Button></Link>
        </div>
        </div>
    )
}

export default CreateReport;