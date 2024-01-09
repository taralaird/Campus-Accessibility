import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import NavMenu from "./NavMenu";
import Footer from "./Footer";
import ltPic from "../images/ltPic.png";
import ocPic from "../images/ocPic.png";
import ohPic from "../images/ohPic.png";
import pmPic from "../images/pmPic.png";
import tlPic from "../images/tlPic.png";

function AboutUs() {
    
    return (
        <body><main>
        <NavMenu/>
        
            
            <div style = {{"background": "var(--blue)"}}>
            <h1 style={{"text-align":"center", "color": "white"}}>About Us</h1>
            </div>
            <div style ={{ "margin": "0% 10% 0%"}}>
            <p>We are a group of 4th year software engineering students with a passion for creating a more accessible campus. 
                Throughout our years at Western our group and other students have noticed many issues on campus. 
                But we have never had a great place to report these issues or see other peoples reports. 
                This is why we have thought of "Campus Accessibility" an application to allow students, staff, and visitors 
                to view any issues on campus before they get there to plan their route better or to report any issues on campus 
                to allow for others to have an alert of where not to go in the future.</p >
            <div style = {{"text-align":"center"}}>
                <div class="inline-block">
                    <img className="ltPic" alt={"ltPic"} src={ltPic} style={{"width":"200px", "height":"200px"}}/>
                    <div className="name">Laura Tidy</div>
                </div>
                <div class="inline-block">
                    <img className="ocPic" alt={"ocPic"} src={ocPic} style={{"width":"200px", "height":"200px"}}/>
                    <div className="name">Ore Collins</div>
                </div>
                <div class="inline-block">
                    <img className="ohPic" alt={"ohPic"} src={ohPic} style={{"width":"200px", "height":"200px"}}/>
                    <div className="name">Olivia Howard</div>
                </div>
                <div class="inline-block">
                    <img className="pmPic" alt={"pmPic"} src={pmPic} style={{"width":"200px", "height":"200px"}}/>
                    <div className="name">Parsa Moenini</div>
                </div>
                <div class="inline-block">
                    <img className="tlPic" alt={"tlPic"} src={tlPic} style={{"width":"200px", "height":"200px"}}/>
                    <div className="name">Tara Laird</div>
                </div>
            
            </div>
            <br></br>
            </div>
            
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
            <br></br>
            <Link to="/" ><Button variant="info">Return to Homepage</Button></Link>
            
        
        </main>
        <Footer />
        </body>
    )
}

export default AboutUs;