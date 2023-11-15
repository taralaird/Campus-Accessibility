import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";


function CreateReport() {
    return (
        <div>
            <h1>Create Report</h1>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control placeholder="Enter name, if desired" />
                    <Form.Text className="text-muted">
                    Sharing your name is optional.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Location</Form.Label>
                    <Form.Control placeholder="Enter location of incident" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Issue Details</Form.Label>
                    <Form.Control placeholder="Share the details of the observed accessibility issue." />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <br />
            <Link to="/" ><Button variant="info">Return to Homepage</Button></Link>
        </div>
    )
}

export default CreateReport;