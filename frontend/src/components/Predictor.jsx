import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import NavMenu from "./NavMenu";
import Form from 'react-bootstrap/Form';

import Footer from "./Footer";
import checkPredictorErrors from "../functions/checkPredictorErrors";

export default function Predictor() {

    const [numFloors, setNumFloors] = useState(null);
    const [numElevators, setNumElevators] = useState(null);
    const [barrierFreeWashrooms, setBarrierFreeWashrooms] = useState(false);
    const [genderNeutralWashrooms, setGenderNeutralWashrooms] = useState(false);
    const [automaticButtonEntry, setAutomaticButtonEntry] = useState(false);

    return (
        <body>
            <main>
                <div>
                    <NavMenu/>
                    <h1>Predictor</h1>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Number of Floors</Form.Label>
                            <Form.Control onChange={(e) => {setNumFloors(e.target.value);}} placeholder="Please enter the number of floors in the building plan" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Number of Elevators</Form.Label>
                            <Form.Control onChange={(e) => {setNumElevators(e.target.value);}} placeholder="Please enter the number of elevators in the building plan" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Check type="checkbox" onChange={() => {setBarrierFreeWashrooms(!barrierFreeWashrooms);}} label="Barrier Free Washrooms" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Check type="checkbox" onChange={(e) => {setGenderNeutralWashrooms(!genderNeutralWashrooms);}} label="Gender Neutral Washrooms" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Check type="checkbox"  onChange={(e) => {setAutomaticButtonEntry(!automaticButtonEntry);}} label="Automatic Button Entry" />
                        </Form.Group>
                        <Button variant="outline-info" onClick={() => {
                            let tempNumFloors = Number(numFloors);
                            let tempNumElevators = Number(numElevators);
                            let tempBarrierFreeWashrooms = Boolean(barrierFreeWashrooms);
                            let tempGenderNeutralWashrooms = Boolean(genderNeutralWashrooms);
                            let tempAutomaticButtonEntry = Boolean(automaticButtonEntry);
                            const json = {
                                tempNumFloors,
                                tempNumElevators,
                                tempBarrierFreeWashrooms,
                                tempGenderNeutralWashrooms,
                                tempAutomaticButtonEntry
                            };
                            if (checkPredictorErrors(numFloors, numElevators, barrierFreeWashrooms, genderNeutralWashrooms, automaticButtonEntry)) {
                                window.alert("There is an issue with the form.\nEnsure the first two fields have numbers.")
                            } else {
                                console.log(json);
                                // TODO: send data to neural net
                            }
                        }}>
                            Submit
                        </Button>
                    </Form>
                    <br />
                    <Link to="/" ><Button variant="info">Return to Homepage</Button></Link>
                </div>
            </main>
            <Footer />
        </body>
    )
}