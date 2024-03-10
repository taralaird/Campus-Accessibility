import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Footer from "./Footer";
import NavMenu from "./NavMenu";
import axios from "axios";
import Report from "./Report";

export default function DeleteReports() {
    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [login, setLogin] = useState(false);
    const [reports, setReports] = useState([])

    const checkLogin = () => {
        if (username && username === "campusAdmin" ) {
            if (password && password === "popcorn") {
                return true;
            }
        }
        alert("Incorrect login credentials");
        return false;
    }
    
    useEffect(() => {
        axios.get("http://localhost:8081/reportByBuilding", {params: {buildingName: "All"}})
            .then((res) => {
                const reports = res.data.map(((value) => {
                    return (
                        <Report page={"delete"} id={value.Reportid} reportTitle={value.ReportTitle} buildingName={value.BuildingName} reportType={value.ReportType} issueDetails={value.ReportNote} />
                    )
                }))
                setReports(reports)
            })
        }, [])
    return (
        <body>
            <main>
                <NavMenu/>
                <h1>Delete Reports</h1>
                    
                {login ? 
                <div>
                {reports}
                <Button onClick={() => {
                    setLogin(false);
                    setUsername("");
                    setPassword("");
                    }}
                >
                    Logout
                </Button> </div> : 
                <Form style={{width: "50%", marginLeft: "1%"}}>
                    <Form.Group className="mb-3">
                        <Form.Label>Username</Form.Label>
                        <Form.Control onChange={(e) => {setUsername(e.target.value);}} placeholder="Enter username"/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={(e) => {setPassword(e.target.value);}} placeholder="Enter password"/>
                    </Form.Group>
                    <Button variant="outline-info" onClick={() => {
                        if (checkLogin()) {
                            setLogin(true);
                        }
                    }}>
                        Submit
                    </Button>
                </Form>}
                </main>
                <Footer />
               
            </body>
        
    )
}