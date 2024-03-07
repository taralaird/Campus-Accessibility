import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import HeaderLogo from "./HeaderLogo";
import Report from "./Report";
import reportType from "../functions/reportType";
import NavMenu from "./NavMenu";
import Footer from "./Footer";


export default function ViewReports() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [login, setLogin] = useState(false);

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
                    {login? 
                    <Button onClick={() => {
                        setLogin(false);
                        setUsername("");
                        setPassword("");
                        }}
                    >
                        Logout
                    </Button> : 
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
                    <br />
                    <Report issueDetails={issueDetails} buildingName={"sample building"} reportTitle={"Cafeteria Popcorn Overflow"} reportType={reportType("4")}  />
                    
                </div>
            </main>
            <Footer />
        </body>
    )
}