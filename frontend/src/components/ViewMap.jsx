import React from "react";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import BuildingDropdown from "./BuildingDropdown";
import NavMenu from "./NavMenu";
import ContactFooter from "./ContactFooter";

export default function ViewMap() {

    return (
        <div>
            {/*<HeaderLogo />*/}
            <NavMenu/>
            <h1>Map</h1>
            <BuildingDropdown />
            <br />
            <Link to="/" ><Button variant="info">Return to Homepage</Button></Link>
            <ContactFooter />
        </div>
    )
}