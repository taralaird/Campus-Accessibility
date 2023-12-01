import React from "react";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import NavMenu from "./NavMenu";
import Footer from "./Footer";

export default function ViewReports() {
    return (
        <body>
            <main>
                <div>
                    {/*<HeaderLogo />*/}
                    <NavMenu/>
                    <h1>Reports</h1>
                    <Link to="/" ><Button variant="info">Return to Homepage</Button></Link>
                    
                </div>
            </main>
            <Footer />
        </body>
    )
}