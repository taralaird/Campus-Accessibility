import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/CALogo.png"

export default function HeaderLogo() {
    return (
        <div style={{"width": "20%", "height": "20%"}}>
            <Link to="/">
                <img alt="Header Logo" src={logo} />
            </Link>
        </div>
    )
}