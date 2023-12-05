import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import NavMenu from "./NavMenu";
import Form from 'react-bootstrap/Form';
import "../styles.css";

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
                    <div style ={{ "margin": "0% 10% 0%"}}>
                    <h1 style ={{"text-align":"center"}}>Predictor</h1>
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
                        <Button variant="info" className="expand-button" style={{"background-color": "rgb(75, 160, 181)","color": "#fff", "border-color": "rgb(75, 160, 181)", "font-weight": "bold" }} onClick={() => {
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
                            if (checkPredictorErrors(tempNumFloors, tempNumElevators, tempBarrierFreeWashrooms, tempGenderNeutralWashrooms, tempAutomaticButtonEntry)) {
                                window.alert("There is an issue with the form.\nEnsure the first two fields have numbers.\nEnsure the first field has a positive number.")
                            } else {
                                console.log(json);
                                // TODO: send data to neural net
                            }
                        }}>
                            Submit
                        </Button>
                    </Form>
                    <br />
                    </div>
                </div>
            </main>
            <Footer />
        </body>
    )
}