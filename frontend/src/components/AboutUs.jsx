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
                    <div className="name">Parsa Moeini</div>
                </div>
                <div class="inline-block">
                    <img className="tlPic" alt={"tlPic"} src={tlPic} style={{"width":"200px", "height":"200px"}}/>
                    <div className="name">Tara Laird</div>
                </div>
            
            </div>
            <br></br>
            </div>
            
            
        
        </main>
        <Footer />
        </body>
    )
}

export default AboutUs;