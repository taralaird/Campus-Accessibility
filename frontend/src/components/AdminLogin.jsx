import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import HeaderLogo from "./HeaderLogo";

function AdminLogin() {
    const [admin, setAdmin] = useState(null);
    const [password, setPassword] = useState(null);
    return (
        <div>
            <HeaderLogo />
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
                        const json = {
                            admin, 
                            password
                        }
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
    )
}

export default AdminLogin;