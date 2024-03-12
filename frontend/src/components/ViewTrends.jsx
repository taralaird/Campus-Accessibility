import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import BarChart from "./BarChart";
import NavMenu from "./NavMenu";
import Footer from "./Footer";
import axios from "axios";

export default function ViewTrends() {
    /* Bar Chart Component explained:
       we can set the xValue to whatever numeric time value
       w determines the height of each bar
       yValue determines the brightness of each bar (greater value => brighter bar)
       feel free to make whatever stylistic changes you believe are beneficial */
    // below is sample data
    const [data, setData] = useState([]);
    const [dataType, setDataType] = useState([]);
    const [top5, setTop5] = useState([]);
    const [dataBuildings, setDataBuildings] = useState([]);


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
        axios.get("http://localhost:8081/reportsByType")
            .then((res, req) => {
                let tempDataType = [];
                for (let i in res.data) {
                    let temp = {xValue: Number(res.data[i].ReportType), w: res.data[i].TotalCount, yValue: 0.5}
                    tempDataType.push(temp);
                }
                setDataType(tempDataType);
            })
    }, [])

    useEffect(() => {
        axios.get("http://localhost:8081/top5Buildings")
            .then((res, req) => {
                let tempTop5 = [];
                let tempDataBuildings = [];
                for (let i in res.data) {
                    let temp = {xValue: Number(i), w:res.data[i].TotalCount, yValue: 0.5}
                    tempTop5.push(res.data[i].BuildingName)
                    tempDataBuildings.push(temp)
                }
                setDataBuildings(tempDataBuildings)
                setTop5(tempTop5)
            })
    })

    
    return (
        <body>
            <main>
                <div>
                    <NavMenu/>
                    <h1>Trends</h1>
                    <BarChart data={data} timePeriod={"Month"} title={"Reports by Month"} subtitle={"For the current year"} note={""} />
                    <br />
                    <BarChart data={dataType} timePeriod={"Report Type"} title={"Reports by Type"} subtitle={"1: Washroom Complaint, 2: Elevator Complaint, 3: Automatic Door Complaint, 4: General Complaint"} />
                    <br />
                    <BarChart data={dataBuildings} timePeriod={"Building"} title={"Reports by Building"} subtitle={`0: ${top5[0]}, 1: ${top5[1]}, 2: ${top5[2]}, 3: ${top5[3]}, 4: ${top5[4]}`}  />
                </div>
            </main>
            <Footer />
        </body>

    )
}