import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import NavMenu from "./NavMenu";
import Form from 'react-bootstrap/Form';
import "../styles.css";
import Footer from "./Footer";
import checkPredictorErrors from "../functions/checkPredictorErrors";
import * as tf from '@tensorflow/tfjs';
import axios from "axios";

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
                            let tempBarrierFreeWashrooms = Boolean(barrierFreeWashrooms)? 1:0;
                            let tempGenderNeutralWashrooms = Boolean(genderNeutralWashrooms)? 1:0;
                            let tempAutomaticButtonEntry = Boolean(automaticButtonEntry)? 1:0;
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
                                axios.get("http://localhost:8081/buildingInfoAndCount")
                                    .then(async (res, req) => {
                                        const values = []
                                        const model = tf.sequential();
                                        model.add(tf.layers.dense({units: 1, inputShape: [1]}));
                                        model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});

                                        const x = res.data.map((val) => {
                                            return val.NumberOfFloors
                                        })
                                        const x1 = res.data.map((val) => {
                                            return val.NumberofElevators
                                        })
                                        const x2 = res.data.map((val) => {
                                            return val.AutomaticButtonEntry ? 1:0
                                        })
                                        const x3 = res.data.map((val) => {
                                            return val.BarrierFreeWashrooms ? 1:0
                                        })
                                        const x4 = res.data.map((val) => {
                                            return val.GenderNeutralWashrooms ? 1:0
                                        })
                                        const xs = tf.tensor2d(x, [x.length, 1])
                                        const xs1 = tf.tensor2d(x1, [x1.length, 1])
                                        const xs2 = tf.tensor2d(x2, [x2.length, 1])
                                        const xs3 = tf.tensor2d(x3, [x3.length, 1])
                                        const xs4 = tf.tensor2d(x4, [x4.length, 1])
                                        const y = res.data.map((val) => {
                                            return val.RepCount
                                        })
                                        const ys = tf.tensor2d(y, [y.length, 1])
                                        await model.fit(xs, ys, {epochs: 250});
                                        values.push(Number(model.predict(tf.tensor2d([tempNumFloors], [1, 1])).dataSync()))
                                        await model.fit(xs1, ys, {epochs: 250})
                                        values.push(Number(model.predict(tf.tensor2d([tempNumElevators], [1, 1])).dataSync()))
                                        await model.fit(xs2, ys, {epochs: 250})
                                        values.push(Number(model.predict(tf.tensor2d([tempAutomaticButtonEntry], [1, 1])).dataSync()))
                                        await model.fit(xs3, ys, {epochs: 250})
                                        values.push(Number(model.predict(tf.tensor2d([tempBarrierFreeWashrooms], [1, 1])).dataSync()))
                                        await model.fit(xs4, ys, {epochs: 250})
                                        values.push(Number(model.predict(tf.tensor2d([tempGenderNeutralWashrooms], [1, 1])).dataSync()))
                                        const mean = (values.reduce((partialSum, a) => partialSum + a, 0))/values.length
                                        alert("This proposed model has the following number of projected issues: " + mean<0? 0:mean.toFixed(2))
                                        window.location.reload();
                                    })
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