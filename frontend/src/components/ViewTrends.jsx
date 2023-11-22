import React from "react";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import HeaderLogo from "./HeaderLogo";
import BarChart from "./BarChart";

export default function ViewTrends() {
    /* Bar Chart Component explained:
       we can set the xValue to whatever numeric time value
       w determines the height of each bar
       yValue determines the brightness of each bar (greater value => brighter bar)
       feel free to make whatever stylistic changes you believe are beneficial */
    // below is sample data
    return (
        <div>
            <HeaderLogo />
            <h1>Trends</h1>
            <BarChart title={"sample title"} subtitle={"sample subtitle"} note={"sample note"} />
            <br />
            <Link to="/" ><Button variant="info">Return to Homepage</Button></Link>
        </div>
    )
}