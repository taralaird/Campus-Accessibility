import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import HeaderLogo from "./HeaderLogo";


function CreateReport() {
    return (
        <div>
            <HeaderLogo />
            <div style ={{ "margin": "0% 10% 0%"}}>
            <h1 style ={{"text-align":"center"}}>Create a New Report</h1>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Title</Form.Label>
                    <Form.Control placeholder="Please give your report a short title" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Building</Form.Label>
                    <Form.Select style={{"color": "grey"}}>
                        <option>Select the building where the issue is located</option>         
                        <option value="1">3M</option>
                        <option value="2">Advanced Faculty For Avian Research</option>
                        <option value="3">Alumni Hall</option>
                        <option value="4">Amit Chakma Engineering</option>
                        <option value="5"> Arts and Humanity Building</option>
                        <option value="6">Biological and Geological Sciences Building</option>
                        <option value="7"> Chemistry Building</option>
                        <option value="8">Claudette Mackay-Lassonde Pavilion</option>
                        <option value="9">Clinical Skills Building (Dr. Don Rix)</option>
                        <option value="10">Dental Sciences Building</option>
                        <option value="11">Elborn College</option>
                        <option value="12">Faculty of Education Building </option>
                        <option value="13">FIMS and Nursing Building</option>
                        <option value="14">Health Science Addition</option>
                        <option value="15"> Health Science Building</option>
                        <option value="16">International and Graduate </option>
                        <option value="17">Ivey Building</option>
                        <option value="18">Kresge Building </option>
                        <option value="19">Law Building </option>
                        <option value="20">Lawson Building</option>
                        <option value="21">Material Science Addition </option>
                        <option value="22">Medical Sciences Building</option>
                        <option value="23">Middlesex College</option>
                        <option value="24">Molecular Biology Laboratory</option>
                        <option value="25"> Music Building</option>
                        <option value="26">Natural Science Centre</option>
                        <option value="27">North Campus Building</option>
                        <option value="28">Ontario Hall Residence</option>
                        <option value="29">Physics and Astronomy Building</option>
                        <option value="30">Robarts Research Institute</option>
                        <option value="31">Siebens-Drake Research Institute</option>
                        <option value="32">Social Science Centre</option>
                        <option value="33">Somerville House</option>
                        <option value="34">Spencer Engineering Building</option>
                        <option value="35">Staging Building</option>
                        <option value="36"> Stevenson Hall</option>
                        <option value="37">Support Services Building</option>
                        <option value="38">Talbot College</option>
                        <option value="39">Taylor Library</option>
                        <option value="40"> Western Alumni Stadium</option>
                        <option value="41">Thames Hall</option>
                        <option value="42">Thompson Engineering Building</option>
                        <option value="43">Thompson Recreation and Athletic Centre</option>
                        <option value="44">University College</option>
                        <option value="45">University Community Centre</option>
                        <option value="46"> Visual Arts Centre</option>
                        <option value="47">D.B. Weldon Library</option>
                        <option value="48">Westren Centre for Public Health and Family Medicine</option>
                        <option value="49"> Western Interdisciplinary Research Building</option>
                        <option value="50">Western Science Centre</option>
                        <option value="51">Western Recreation Centre</option>
                        <option value="52">Western Student Services Building</option>
                        <option value="53">Westminister Hall</option>

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
        </div>
    )
}

export default CreateReport;