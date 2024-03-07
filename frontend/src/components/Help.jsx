import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import NavMenu from "./NavMenu";
import Footer from "./Footer";

function Help() {
    
    return (
        <body><main>
        <NavMenu/>
            
            <div style = {{"background": "var(--blue)"}}>
                <h1 style={{"text-align":"center", "color": "white"}}>How to use "Campus Accessibility"</h1>
            </div>
            <div style ={{ "margin": "0% 10% 0%"}}>
            <p>The application opens onto the main page here there are many features you can explore (see description below). 
                On the top left of the application there are 5 buttons that all have different features and take you to a new page 
                (see button descriptions below)</p>
            
            <h2 style = {{"color": "var(--blue)"}}>Main Page</h2>
            
            <p>The main page is for viewing the map, newest trends, and newest reports. 
                If you click on "Expand Map" in the bottom right below the map the application opens to a more detailed view of the map. 
                Here you can click on the building or use the dropdown to see the building information and reports. 
                You can also click "Add Report" to add a new report.</p>
            <h2 style = {{"color": "var(--blue)"}}>View Map Button</h2>
            <p>This button takes you to a page that takes you to the same place as when you click 
                "Expand Map" from the main page. Again here you can click on the building or 
                use the dropdown to see the building information and reports. 
                You can also click "Add Report" to add a new report.</p>
            <h2 style = {{"color": "var(--blue)"}}>Create Report Button</h2>
            <p>This button takes you to a page that allows you to create a new report 
                by adding in all the prompted required fields and then you can click "Submit" to submit the form 
                or "Cancel" to cancel the form. </p>
            <h2 style = {{"color": "var(--blue)"}}>View Trends Button</h2>
            <p>This button takes you to a page that allows you to view the trends. 
                Here you can view 3 different trends number of incident reports over time, 
                number of incident reports per building, and number of incident reports per issue type.</p>
            <h2 style = {{"color": "var(--blue)"}}>View Reports Button</h2>
            <p>This button allows you to view all the reports for all the buildings </p>
            <h2 style = {{"color": "var(--blue)"}}>Predictor Model Button</h2>
            <p>This button takes you to a page that can make predictions on how many issues a building would have 
                based on the information that you input. </p>
            </div>
            
            
        
        </main>
        <Footer />
        </body>
    )
}

export default Help;