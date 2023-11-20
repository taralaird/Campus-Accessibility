import React from "react";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import BuildingDropdown from "./BuildingDropdown";


export default function ViewMap() {

    return (
        <div>
            <h1>Map</h1>
            <BuildingDropdown />
            <br />
            <Link to="/" ><Button variant="info">Return to Homepage</Button></Link>
        </div>
    )
}