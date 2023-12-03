import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import NavMenu from "./NavMenu";
import Footer from "./Footer";

function AdminLogin() {
    const [admin, setAdmin] = useState(null);
    const [password, setPassword] = useState(null);
    return (
        <body><main>
        <div>
            <NavMenu/>
            <h1>Admin Login</h1>
            <Form>
                <Form.Group className="mb-3" >
                    <Form.Label>Admin Username</Form.Label>
                    <Form.Control placeholder="Enter username" onChange={(e) => {setAdmin(e.target.value)}}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter password" onChange={(e) => {setPassword(e.target.value)}} />
                </Form.Group>
                <Button variant="primary" onClick={() => {
                    if (admin && password) {
                        let tempAdmin = String(admin);
                        let tempPassword = String(password);
                        const json = {
                            tempAdmin, 
                            tempPassword
                        };
                        console.log(json);
                        // TODO: send to backend for verification
                    } else {
                        window.alert("fill out both username and password")
                    }
                }}>
                    Submit
                </Button>
            </Form>
            <Link to="/" ><Button variant="info">Return to Homepage</Button></Link>
            
        </div>
        </main>
        <Footer />
        </body>
    )
}

export default AdminLogin;