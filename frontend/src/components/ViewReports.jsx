import React from "react";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

import HeaderLogo from "./HeaderLogo";
import Report from "./Report";
import reportType from "../functions/reportType";
import NavMenu from "./NavMenu";
import Footer from "./Footer";


export default function ViewReports() {
    // We'll probably end up returning an array of report rows 
    // and use .map() to generate an array of reports
    const issueDetails = `The cafeteria made so much popcorn it overflowed into the hallway`;
    return (

        <body>
            <main>
                <div>
                    <NavMenu/>
                    <h1>Reports</h1>
                    <Report issueDetails={issueDetails} buildingName={"sample building"} 
                reportTitle={"Cafeteria Popcorn Overflow"} reportType={reportType("4")}  />
                    <Link to="/" ><Button variant="info">Return to Homepage</Button></Link>
                    
                </div>
            </main>
            <Footer />
        </body>
    )
}