import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import axios from "axios";
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import HeaderLogo from "./HeaderLogo";
import Report from "./Report";
import reportType from "../functions/reportType";
import NavMenu from "./NavMenu";
import Footer from "./Footer";
import { Autocomplete, TextField } from "@mui/material";
import {buildingNames} from "../constants/BuildingNames";


export default function ViewReports() {

    let initialBuilding = null;
    const sortedNames = ["All"];
    for (let i in buildingNames.sort()) {
        sortedNames.push(buildingNames[i]);
    }
    if (sortedNames && sortedNames[0]) {
        initialBuilding = sortedNames[0];
    }
    const [building, setBuilding] = useState(initialBuilding);
    const [reports, setReports] = useState([])

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [login, setLogin] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:8081/reportByBuilding", {params: {buildingName: building}})
            .then((res) => {
                const reports = res.data.map(((value) => {
                    return (
                        <Report id={value.Reportid} reportTitle={value.ReportTitle} buildingName={value.BuildingName} reportType={value.ReportType} issueDetails={value.ReportNote} />
                    )
                }))
                setReports(reports)
    })
}, [building])

    const checkLogin = () => {
        if (username && username === "campusAdmin" ) {
            if (password && password === "popcorn") {
                return true;
            }
        }
        alert("Incorrect login credentials");
        return false;
    }

    // We'll probably end up returning an array of report rows 
    // and use .map() to generate an array of reports
    const issueDetails = `The cafeteria made so much popcorn it overflowed into the hallway`;
    return (

        <body>
            <main>
                <div>
                    <NavMenu/>
                    <h1>Reports</h1>
                    <br />
                    <br />
                    <Autocomplete disablePortal
                    onChange={(e) => { setBuilding(e.target.outerText) }}
                    id="combo-box-demo"
                    options={sortedNames}
                    renderInput={(params) => <TextField {...params} label="Building"></TextField>}
                    value= {building} 
                    />
                    {reports}
                    
                    <br />                    
                </div>
            </main>
            <Footer />
        </body>
    )
}