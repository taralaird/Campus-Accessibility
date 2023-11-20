import React from "react";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import HeaderLogo from "./HeaderLogo";
import BuildingDropdown from "./BuildingDropdown";

export default function ViewMap() {

    return (
        <div>
            <HeaderLogo />
            <h1>Map</h1>
            <BuildingDropdown />
            <br />
            <Link to="/" ><Button variant="info">Return to Homepage</Button></Link>
        </div>
    )
}