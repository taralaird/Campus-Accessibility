import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import HeaderLogo from "./HeaderLogo";
import CampusMap from "../images/Campus_Map.png";
import { buildingNames } from "../constants/BuildingNames";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import buttonVariant from "../functions/buttonVariant";
import { Autocomplete, TextField } from "@mui/material";
import BuildingInfo from "./BuildingInfo";
import "../stylesheets/ViewMap.css";
import BuildingDropdown from "./BuildingDropdown";
import NavMenu from "./NavMenu";
import Footer from "./Footer";
import Report from "./Report";
import Toast from 'react-bootstrap/Toast';
import { ArrowsAngleContract, PlusCircle } from "react-bootstrap-icons";
import "../styles.css";
import axios, {isCancel, AxiosError} from 'axios';


/* once we have a backend, we should build a map
   with the building name as key and the number of issues as value */
export default function ViewMap() {
    
    let initialBuilding = null;
    const sortedNames = buildingNames.sort();
    if (sortedNames && sortedNames[0]) {
        initialBuilding = sortedNames[0];
    }
    const [building, setBuilding] = useState(initialBuilding);

    const buildingInfoMap = new Map();


    const [numFloors, setNumFloors] = useState(null)
    const [numElevators, setNumElevators] = useState(null)
    const [autoButton, setAutoButton] = useState(null)
    const [genderBath, setGenderBath] = useState(null)
    const [barrierFree, setBarrierFree] = useState(null)
    const [reportList, setReports] = useState([])
    const [buttons, setButtons] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8081/buildingInfo")
            .then((res) => {
                if (res && res.data) {
                    for (let i=0; i<res?.data?.length; i++) {
                        if (res?.data[i]?.BuildingName === building) {
                            setAutoButton(res?.data[i]?.AutomaticButtonEntry==="y"? true : false)
                            setBarrierFree(res?.data[i]?.BarrierFreeWashrooms==="y"? true: false)
                            setGenderBath(res?.data[i]?.GenderNeutralWashrooms==="y"? true: false)
                            setNumElevators(Number(res?.data[i]?.NumberofElevators))
                            setNumFloors(Number(res?.data[i]?.NumberOfFloors))
                            break;
                        }
                    }
                }
            })
            .catch((err) => console.error(err));
    }, [building])
/*
    
  useEffect(() => {
    axios.get("https://localhost:8081/infobyBuilding", {params: {buildingName: building}})
      .then((result) => {
        console.log(result);
      })
      .catch((error) => console.log(error));
  }, [building]); */

  
    
    useEffect(() => {
        axios.get("http://localhost:8081/reportByBuilding", {params: {buildingName: building}})
            .then((res) => {
                const reports = res.data.map(((value) => {
                    return (
                        <Report id={value.Reportid} reportTitle={value.ReportTitle} buildingName={value.BuildingName} reportType={value.ReportType} issueDetails={value.ReportNote} />
                    )
                }))
                setReports(reports)
    })
}, [building])

    const reportMap = new Map();


    useEffect(() => {
        axios.get("http://localhost:8081/reportCount")
        .then((res) => {
            for (let i in res.data) {
                reportMap.set(res.data[i].BuildingName, res.data[i].repCount)
            }
            const buttons = sortedNames.map((value, index) => {
                console.log(reportMap)
                let styling = {};
                const color = buttonVariant(reportMap.has(value) ? reportMap.get(value): 0)
                switch (value) {
                    case "3M":
                        styling = { "position": "absolute", "top": "52%", "left": "34%", "transform": "translate(0%, 0%)" }
                        break;
                    case "Advanced Faculty For Avian Research":
                        styling = { "position": "absolute", "top": "31%", "left": "21.2%", "transform": "translate(0%, 0%)" }
                        break;
                    case "Alumni Hall":
                        styling = { "position": "absolute", "top": "58%", "left": "30.5%", "transform": "translate(0%, 0%)" }
                        break;
                    case "Amit Chakma Engineering":
                        styling = { "position": "absolute", "top": "63%", "left": "23.2%", "transform": "translate(0%, 0%)" }
                        break;
                    case "Arts and Humanity Building":
                        styling = { "position": "absolute", "top": "54%", "left": "37.5%", "transform": "translate(0%, 0%)" }
                        break;
                    case "Biological and Geological Sciences Building":
                        styling = { "position": "absolute", "top": "39%", "left": "44%", "transform": "translate(0%, 0%)" }
                        break;
                    case "Chemistry Building":
                        styling = { "position": "absolute", "top": "35%", "left": "44%", "transform": "translate(0%, 0%)" }
                        break;
                    case "Claudette Mackay-Lassonde Pavilion":
                        styling = { "position": "absolute", "top": "61%", "left": "27%", "transform": "translate(0%, 0%)" }
                        break;
                    case "Clinical Skills Building (Dr. Don Rix)":
                        styling = { "position": "absolute", "top": "39%", "left": "36%", "transform": "translate(0%, 0%)" }
                        break;
                    case "D.B. Weldon Library":
                        styling = { "position": "absolute", "top": "48%", "left": "30%", "transform": "translate(0%, 0%)" }
                        break;
                    case "Dental Sciences Building":
                        styling = { "position": "absolute", "top": "33.5%", "left": "38%", "transform": "translate(0%, 0%)" }
                        break;
                    case "Elborn College":
                        styling = { "position": "absolute", "top": "66%", "left": "15%", "transform": "translate(0%, 0%)" }
                        break;
                    case "FIMS and Nursing Building":
                        styling = { "position": "absolute", "top": "59.5%", "left": "36%", "transform": "translate(0%, 0%)" }
                        break;
                    case "Faculty of Education Building":
                        styling = { "position": "absolute", "top": "83%", "left": "9.5%", "transform": "translate(0%, 0%)" }
                        break;
                    case "Health Science Addition":
                        styling = { "position": "absolute", "top": "36%", "left": "39.7%", "transform": "translate(0%, 0%)" }
                        break;
                    case "Health Science Building":
                        styling = { "position": "absolute", "top": "63%", "left": "34%", "transform": "translate(0%, 0%)" }
                        break;
                    case "International and Graduate":
                        styling = { "position": "absolute", "top": "53.5%", "left": "40%", "transform": "translate(0%, 0%)" }
                        break;
                    case "Ivey Building":
                        styling = { "position": "absolute", "top": "60%", "left": "18.5%", "transform": "translate(0%, 0%)" }
                        break;
                    case "Kresge Building":
                        styling = { "position": "absolute", "top": "39.5%", "left": "40%", "transform": "translate(0%, 0%)" }
                        break;
                    case "Law Building":
                        styling = { "position": "absolute", "top": "53%", "left": "27%", "transform": "translate(0%, 0%)" }
                        break;
                    case "Lawson Building":
                        styling = { "position": "absolute", "top": "47%", "left": "35.5%", "transform": "translate(0%, 0%)" }
                        break;
                    case "Material Science Addition":
                        styling = { "position": "absolute", "top": "37%", "left": "45.5%", "transform": "translate(0%, 0%)" }
                        break;
                    case "Medical Sciences Building":
                        styling = { "position": "absolute", "top": "37.5%", "left": "37%", "transform": "translate(0%, 0%)" }
                        break;
                    case "Middlesex College":
                        styling = { "position": "absolute", "top": "46.5%", "left": "48%", "transform": "translate(0%, 0%)" }
                        break;
                    case "Molecular Biology Laboratory":
                        styling = { "position": "absolute", "top": "39%", "left": "38%", "transform": "translate(0%, 0%)" }
                        break;
                    case "Music Building":
                        styling = { "position": "absolute", "top": "58.5%", "left": "41%", "transform": "translate(0%, 0%)" }
                        break;
                    case "Natural Science Centre":
                        styling = { "position": "absolute", "top": "38.5%", "left": "41.7%", "transform": "translate(0%, 0%)" }
                        break;
                    case "North Campus Building":
                        styling = { "position": "absolute", "top": "44%", "left": "52%", "transform": "translate(0%, 0%)" }
                        break;
                    case "Physics and Astronomy Building":
                        styling = { "position": "absolute", "top": "43.5%", "left": "41.5%", "transform": "translate(0%, 0%)" }
                        break;
                    case "Robarts Research Institute":
                        styling = { "position": "absolute", "top": "32%", "left": "42%", "transform": "translate(0%, 0%)" }
                        break;
                    case "Siebens-Drake Research Institute":
                        styling = { "position": "absolute", "top": "34.3%", "left": "34%", "transform": "translate(0%, 0%)" }
                        break;
                    case "Social Science Centre":
                        styling = { "position": "absolute", "top": "41.5%", "left": "33.5%", "transform": "translate(0%, 0%)" }
                        break;
                    case "Somerville House":
                        styling = { "position": "absolute", "top": "50%", "left": "34.5%", "transform": "translate(0%, 0%)" }
                        break;
                    case "Spencer Engineering Building":
                        styling = { "position": "absolute", "top": "59%", "left": "25%", "transform": "translate(0%, 0%)" }
                        break;
                    case "Staging Building":
                        styling = { "position": "absolute", "top": "47.3%", "left": "52%", "transform": "translate(0%, 0%)" }
                        break;
                    case "Stevenson Hall":
                        styling = { "position": "absolute", "top": "45%", "left": "37%", "transform": "translate(0%, 0%)" }
                        break;
                    case "Support Services Building":
                        styling = { "position": "absolute", "top": "31.5%", "left": "26.5%", "transform": "translate(0%, 0%)" }
                        break;
                    case "Talbot College":
                        styling = { "position": "absolute", "top": "56.5%", "left": "43.5%", "transform": "translate(0%, 0%)" }
                        break;
                    case "Taylor Library":
                        styling = { "position": "absolute", "top": "36.3%", "left": "41.8%", "transform": "translate(0%, 0%)" }
                        break;
                    case "Thames Hall":
                        styling = { "position": "absolute", "top": "54%", "left": "32.5%", "transform": "translate(0%, 0%)" }
                        break;
                    case "Thompson Engineering Building":
                        styling = { "position": "absolute", "top": "64.5%", "left": "26%", "transform": "translate(0%, 0%)" }
                        break;
                    case "Thompson Recreation and Athletic Centre":
                        styling = { "position": "absolute", "top": "69.5%", "left": "23%", "transform": "translate(0%, 0%)" }
                        break;
                    case "University College":
                        styling = { "position": "absolute", "top": "47.5%", "left": "38.5%", "transform": "translate(0%, 0%)" }
                        break;
                    case "University Community Centre":
                        styling = { "position": "absolute", "top": "43%", "left": "30%", "transform": "translate(0%, 0%)" }
                        break;
                    case "Visual Arts Centre":
                        styling = { "position": "absolute", "top": "41%", "left": "51%", "transform": "translate(0%, 0%)" }
                        break;
                    case "Western Alumni Stadium":
                        styling = { "position": "absolute", "top": "86.5%", "left": "22.8%", "transform": "translate(0%, 0%)" }
                        break;
                    case "Western Centre for Public Health and Family Medicine":
                        styling = { "position": "absolute", "top": "24.2%", "left": "55%", "transform": "translate(0%, 0%)" }
                        break;
                    case "Western Interdisciplinary Research Building":
                        styling = { "position": "absolute", "top": "36%", "left": "49%", "transform": "translate(0%, 0%)" }
                        break;
                    case "Western Recreation Centre":
                        styling = { "position": "absolute", "top": "70%", "left": "28%", "transform": "translate(0%, 0%)" }
                        break;
                    case "Western Science Centre":
                        styling = { "position": "absolute", "top": "44%", "left": "45%", "transform": "translate(0%, 0%)" }
                        break;
                    case "Western Student Services Building":
                        styling = { "position": "absolute", "top": "45%", "left": "28%", "transform": "translate(0%, 0%)" }
                        break;
                    case "Westminister Hall":
                        styling = { "position": "absolute", "top": "18%", "left": "48%", "transform": "translate(0%, 0%)" }
                        break;
        
                }
                return (
                    <Button className="buttons" variant={buttonVariant(reportMap.has(value) ? reportMap.get(value): 0)} style={styling} onClick={() => { setBuilding(value); }}></Button>
                )
            });
            setButtons(buttons)
        })
    }, [])


    
    // TODO: style this group
    const buttonGroup = (
        <ButtonGroup >{buttons}</ButtonGroup>
    )


    const issueDetails = "TEST";
    return (
        <div>
            <NavMenu />
            <div className="mapPage">
                <div className="map-container">
                    <img className="campus-map" alt={"Campus Map"} src={CampusMap} />
                    <div >{buttons}</div>
                    
                    <div><Button sz="large" className="returnButton" style={{ "position": "absolute", "top": "78%", "left": "87%", "transform": "translate(0%, 0%)", "background-color": "rgb(75, 160, 181)", "border-color": "rgb(75, 160, 181)", "font-weight": "bold" }}><Link to="/" className="returnButton-link">Contract Map</Link> <ArrowsAngleContract /> </Button>
                    </div>
                    <div><Button sz="large" className="returnButton" style={{ "position": "absolute", "top": "78%", "left": "75%", "transform": "translate(0%, 0%)", "background-color": "rgb(75, 160, 181)", "border-color": "rgb(75, 160, 181)", "font-weight": "bold" }}><Link to="/createReport" className="returnButton-link">Add Report</Link> <PlusCircle /> </Button>
                    </div>
                    <div>
                    <Toast  style={{"position": "absolute", "top": "83%", "left":"71%", "opacity": "100%"}}>
                        <Toast.Header closeButton={false} >
                            <h4 style={{"color": "black"}}>Map Legend</h4>
                        </Toast.Header>
                        <Toast.Body class="align-items-center bg-white">
                            <h6>Report Serverity</h6>
                            <h6 class="text-info">Blue: Low - 0-1 Reports</h6>
                            <h6 class="text-warning">Yellow: Moderate - 2-3 Reports</h6>
                            <h6 class="text-danger">Red: Severe - 4+ Reports</h6>
                        </Toast.Body>
                    </Toast>
                    </div>
                </div>
                
                <div className="infoContainer">
                
                        <Autocomplete disablePortal
                            onChange={(e) => { setBuilding(e.target.outerText) }}
                            id="combo-box-demo"
                            options={sortedNames}
                            renderInput={(params) => <TextField {...params} label="Building"></TextField>}
                            value= {building} 
                            />
                        
                            <BuildingInfo buildingName={building} severity={buttonVariant(0)} floors={numFloors} elevators={numElevators} barrierFreeWashrooms={barrierFree} genderNeutralWashrooms={genderBath} automaticButtonEntry={autoButton} />
                            
                        <div style={{ "width": "100%", "background-color": "rgb(75, 160, 181)", "color": "#fff" }}>
                            <h2 style={{ "font-weight": "bold" }}>Reports for {building}</h2>
                        </div>
                        {/*DB TODO: Need to get all reports based on building variable = buildingName, for each report fill out Report fields*/}
                    <div className="report">
                        {reportList}
                    </div>
                    
                </div>
            </div>
            <Footer />
        </div>

    )
}