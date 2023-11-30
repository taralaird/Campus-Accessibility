import React from "react";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import HeaderLogo from "./HeaderLogo";
import BarChart from "./BarChart";
import ContactFooter from "./ContactFooter";

export default function ViewTrends() {
    /* Bar Chart Component explained:
       we can set the xValue to whatever numeric time value
       w determines the height of each bar
       yValue determines the brightness of each bar (greater value => brighter bar)
       feel free to make whatever stylistic changes you believe are beneficial */
    // below is sample data
        
    const data = [
        {xValue: 6, w: 3, yValue: 6.78},
        {xValue: 5, w: 4, yValue: 7.97},
        {xValue: 4, w: 9, yValue: 9.27},
        {xValue: 3, w: 9, yValue: 8.75},
        {xValue: 2, w: 4, yValue: 8.24},
        {xValue: 1, w: 8, yValue: 8.94},
      ];
    return (
        <div>
            <HeaderLogo />
            <h1>Trends</h1>
            <BarChart data={data} timePeriod={"Weeks Ago"} title={"sample title"} subtitle={"sample subtitle"} note={"sample note"} />
            <br />
            <Link to="/" ><Button variant="info" style= {{"margin-bottom" :"100px"}} >Return to Homepage</Button></Link> 
            <ContactFooter />
        </div>
    )
}