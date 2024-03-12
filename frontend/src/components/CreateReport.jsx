import React, { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import Autocomplete from "@mui/material/Autocomplete";
import { TextField } from "@mui/material";
import checkReportErrors from "../functions/createReportErrors";
import { buildingNames } from "../constants/BuildingNames";
import NavMenu from "./NavMenu";
import Footer from "./Footer";
import "../styles.css";
import axios, {isCancel, AxiosError} from 'axios';

function CreateReport() {

    const [title, setTitle] = useState(null);
    const [building, setBuilding] = useState(null);
    const [reportType, setReportType] = useState(null);
    const [issueDetails, setIssueDetails] = useState(null);
    const names = buildingNames.sort();
    const [buildingNameList, setBuildingNameList] = useState(names? names : []);

    useEffect(() => {
        axios.get("http://localhost:8081/buildingDropdown")
            .then((res) => {
                let buildingList = [];
                for (let i=0; i<res?.data?.length; i++) {
                    if (res && res.data && res.data[i] && res.data[i].BuildingName) {
                        buildingList.push(res?.data[i]?.BuildingName)
                    }
                }
                let temp = buildingList.sort();
                setBuildingNameList(temp);
            })
            .catch(err => console.err(err));
    }, [])


    return (
        <body><main>
        <div>
            <NavMenu/>
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
                    options={buildingNameList}
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
                {/*DB TODO: Get temp values as fields for new report,push to DB*/}
                <Button variant="info" className="expand-button" style={{"background-color": "rgb(75, 160, 181)","color": "#fff", "border-color": "rgb(75, 160, 181)", "font-weight": "bold" }} onClick={
                    async () => {
                        let tempTitle = String(title);
                        let tempBuilding = String(building);
                        let tempReportType = String(reportType);
                        let tempIssueDetails = String(issueDetails);
                        let d = new Date();
                        const offset = d.getTimezoneOffset();
                        d = new Date(d.getTime() - (offset*60000))
                        const tempTime = d.toISOString().split('T');
                        const reqBody = {
                            reportTitle: tempTitle,
                            reportDate: tempTime[0] + " " + tempTime[1].split(".")[0],
                            buildingName: tempBuilding,
                            reportType: tempReportType,
                            reportNote: tempIssueDetails,
                        };
                        const errors = checkReportErrors(title, building, reportType, issueDetails);
                        if (errors==="none") {
                            // TODO: send json to backend
                            await axios.post('http://localhost:8081/submitReport',
                                {body: {reportTitle: title, reportDate: tempTime[0] + " " + tempTime[1].split(".")[0], buildingName: building, reportType: reportType, reportNote: issueDetails}}
                            )
                                .then((res) => console.log(res))
                                .catch((err) => console.error(err));
                                window.location.reload();
                                window.alert("Thank you for filling out a report, it has been added to our database");
                        } else {
                            window.alert(errors);
                        }
                    }
                }>

                    Submit
                </Button>
            </Form>
            <br />
            <Link to="/map" ><Button className="cancel-button" style={{"background-color": "red","color": "#fff", "border-color": "red", "font-weight": "bold" }}>Cancel</Button></Link>
        </div>
        </div>
        </main>
        <Footer />
        </body>
    )
}

export default CreateReport;