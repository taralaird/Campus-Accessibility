import React from "react";

function ContactFooter() {
    return (
        <div className = "footer" style = {{"background-color": "#17a2b8", "text-align": "center", "padding": "3px", "position": "fixed","bottom": "0","width": "100%","margin": "30px 0 0 -10px","z-index": "-1"}}>
            <p><a href="mailto:campusaccessibility23@gmail.com" style= {{"textDecoration" :"none", "color":"white"}} >Contact Us </a></p> 
        </div>
        )
    }
export default ContactFooter;

