import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import HeaderLogo from "./HeaderLogo";


function CreateReport() {
    return (
        <div style ={{ alignItems:'center', height: '100vh'}}>
            <HeaderLogo />
            <h1>Create a New Report</h1>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Title</Form.Label>
                    <Form.Control placeholder="Please give your report a short title" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Building</Form.Label>
                    <Form.Select style={{"color": "grey"}}>
                        <option>Select the building where the issue is located</option>
                        {/* TODO: add options for every building */}
                        <option value="1">Amit Chakma Engineering Building</option>
                        <option value="2">Natural Sciences Centre</option>
                        <option value="3">Social Sciences Centre</option>
                    </Form.Select>    
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Report Type</Form.Label>
                    <Form.Select style={{"color": "grey"}}>
                        <option >Select the type of report you are making</option>
                        <option value="1">Washroom Complaint</option>
                        <option value="2">Elevator Complaint</option>
                        <option value="3">Automatic Door Complaint</option>
                        <option value="4">General Complaint</option>
                    </Form.Select>    
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Issue Details</Form.Label>
                    <Form.Control placeholder="Share the details of the observed accessibility issue." />
                </Form.Group>

                <Button variant="outline-info" type="submit">
                    Submit
                </Button>

            </Form>
            <br />
            <Link to="/map" ><Button variant="outline-danger">Cancel</Button></Link>
        </div>
    )
}

export default CreateReport;