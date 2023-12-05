import React from "react";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import BarChart from "./BarChart";
import NavMenu from "./NavMenu";
import Footer from "./Footer";

export default function ViewTrends() {
    /* Bar Chart Component explained:
       we can set the xValue to whatever numeric time value
       w determines the height of each bar
       yValue determines the brightness of each bar (greater value => brighter bar)
       feel free to make whatever stylistic changes you believe are beneficial */
    // below is sample data

    
    return (
        <body>
            <main>
                <div>
                    <NavMenu/>
                    <h1>Trends</h1>
                    <BarChart title={"sample title"} subtitle={"sample subtitle"} note={"sample note"} />
                    <br />
                    
                </div>
            </main>
            <Footer />
        </body>

    )
}