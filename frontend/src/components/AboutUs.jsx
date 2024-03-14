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
            <div style ={{ "margin": "0% 10% 0%", "textAlign": "center"}}>
            <p>The creators of this website are a group of fifth year software engineering students at Western University. 
                <br></br>
                <br></br>
                Western claims it has a ‘barrier-free’ campus, however, members of the disabled student population have stated 
                the campus is not as accessible as Western claims, as reported in the Western Gazette. Websites and tools offered 
                by Western include gaps, are difficult to use, and often only available with a valid UWO account. 
                We have developed Campus Accessibility (CA) as a tool that can help in areas where the other resources lack. 
                This web application, open to all, allows users to anonymously report accessibility issues around Western’s campus.
                <br></br>
                <br></br>
                We hope that Campus Accessibility can improve the student experience at Western University. 
</p >
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