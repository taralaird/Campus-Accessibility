const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "campus_accessibility"
});

app.get('/', (req, res)=>{
    return res.json("Hello World");
});

app.get('/buildingInfo', (req, res)=>{
    const buildingName = req.query.buildingName;
    const sqlSelect = 
    `SELECT BuildingName, NumberOfFloors, NumberofElevators, BarrierFreeWashrooms, GenderNeutralWashrooms, AutomaticButtonEntry
    FROM building_information
    ORDER BY BuildingName ASC`;
    db.query(sqlSelect,[buildingName], (err, data)=> {
        if(err) return res.json(err);
        return res.json(data);
    })
});

app.get('/reportByBuilding', (req, res)=>{
    const buildingName = req.query.buildingName;
    const sqlSelect = 
    `SELECT ReportTitle, ReportDate, BuildingName, ReportType, ReportNote
    FROM reports
    WHERE ReportTitle IS NOT NULL`;
    db.query(sqlSelect,[buildingName], (err, data)=> {
        if(err) return res.json(err);
        return res.json(data);
    })
});

app.get('/buildingDropdown', (req, res)=>{
    const sqlSelect = 
    `SELECT BuildingName 
    FROM building_information
    ORDER BY BuildingName ASC`;
    db.query(sqlSelect, (err, data)=> {
        if(err) return res.json(err);
        return res.json(data);
    })
});

app.post('/submitReport', (req, res) => {
    const sql = "INSERT INTO reports (`ReportTitle`, `ReportDate`, `BuildingName`, `ReportType`, `ReportNote`) Values (?)";
    const values = [
        req.body.reportTitle,
        req.body.reportDate,
        req.body.buildingName,
        req.body.reportType,
        req.body.reportNote
    ]
    console.log(req);
    db.query(sql, [values], (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
});



app.listen(8081, ()=> {
    console.log("listening...");
});

