import React, { useEffect, useState }from "react";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import MapImage from "../images/Campus_Map_2-1.png";
import { ArrowsAngleExpand } from "react-bootstrap-icons";
import "../styles.css";
import NavMenu from "./NavMenu";
import Footer from "./Footer";
import axios from "axios";
import Report from "./Report";
import BarChart from "./BarChart";




function MainMenu() {
    const [reports, setReports] = useState([])
    const [data, setData] = useState([]);

    
    useEffect(() => {
        axios.get("http://localhost:8081/reportsByMonth")
            .then((res, req) => {
                let tempData = [];
                for (let i in res.data) {
                    let xVal = res.data[i].ReportMonth
                    let temp = {xValue: xVal, w: res.data[i].TotalCount, yValue: 0.5}
                    tempData.push(temp);
                }
                setData(tempData);
            })
    }, [])
    useEffect(() => {
        axios.get("http://localhost:8081/recentReports")
            .then((res) => {
                const reports = res.data.map(((value) => {
                    return (
                        <Report id={value.Reportid} reportTitle={value.ReportTitle} reportDate={value.Date} buildingName={value.BuildingName} reportType={value.ReportType} issueDetails={value.ReportNote} />
                    )
                }))
                setReports(reports)
    })
})
  
    return (
        <body><main>
        <div className="main-page">
            <NavMenu/>
            <div className="content">
            <div className="map-sec">
            <img
              src={MapImage} alt="Map" style={{ cursor: 'pointer' }}/>
        <Button variant="info" className="expand-button" ><Link to="/map" className="expand-button-link">Expand Map</Link> <ArrowsAngleExpand /> </Button>
      </div>
                <div className="newest-sec">

                    <div className="newest1">
                        <h2>Newest Trends</h2>
                        <div class="text-body" style = {{"background-color": "white", "height": "230px","overflow": "auto"}}>
                        <BarChart data={data} timePeriod={"Month"} title={"Reports by Month"} subtitle={"For the current year"} note={""} />
                        </div>
                    </div>
                    <div className="newest2">
                        <h2>Newest Reports</h2>
                        <div>
                        <div  class="text-body" style= {{"font-weight": "normal", "height": "230px","overflow": "auto"}}>
                                {reports}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </main>
            <Footer/>
        </body>
        
    )
}




export default MainMenu;