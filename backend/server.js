const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(bodyParser.raw());

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Tlaird.1700",
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
    console.log(req.query.buildingName)
    let sqlSelect = "";
    if (req.query.buildingName === "All") {
        sqlSelect = 
        `SELECT ReportTitle, ReportDate, BuildingName, ReportType, ReportNote
        FROM reports
        WHERE ReportTitle IS NOT NULL`;    
    } else {
        sqlSelect = 
        `SELECT ReportTitle, ReportDate, BuildingName, ReportType, ReportNote
        FROM reports
        WHERE BuildingName = ? AND ReportTitle IS NOT NULL`;
    }
    db.query(sqlSelect,[buildingName], (err, data)=> {
        if(err) return res.json(err);
        return res.json(data);
    })
});

app.get('/infobyBuilding', (req, res)=>{
    const buildingName = req.query.buildingName;
    console.log(req.query.buildingName)
    const sqlSelect = 
    `SELECT BuildingName, NumberOfFloors, NumberofElevators, BarrierFreeWashrooms, GenderNeutralWashrooms, AutomaticButtonEntry
    FROM building_information
    WHERE BuildingName = ?`;
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
    const sql = "INSERT INTO reports (`ReportTitle`, `ReportDate`, `BuildingName`, `ReportType`, `ReportNote`) Values (?, ?, ?, ?, ?)";
    console.log(Object.keys(req.body));
    db.query(sql, [
        req.body.body.reportTitle,
        req.body.body.reportDate,
        req.body.body.buildingName,
        req.body.body.reportType,
        req.body.body.reportNote
    ], (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
});



app.listen(8081, ()=> {
    console.log("listening...");
});

