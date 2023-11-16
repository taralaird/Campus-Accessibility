import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import HeaderLogo from "./HeaderLogo";

function AdminLogin() {
    return (
        <div>
            <HeaderLogo />
            <h1>Admin Login</h1>
            <Form>
                <Form.Group className="mb-3" >
                    <Form.Label>Admin Username</Form.Label>
                    <Form.Control placeholder="Enter username" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <Link to="/" ><Button variant="info">Return to Homepage</Button></Link>
        </div>
    )
}

export default AdminLogin;