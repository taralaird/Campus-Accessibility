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
        `SELECT Reportid, ReportTitle, Date_Format(ReportDate,'%m/%d/%Y %h:%i %p') As Date, BuildingName, ReportType, ReportNote
        FROM reports
        WHERE ReportTitle IS NOT NULL
        ORDER BY Date Desc`;    
    } else {
        sqlSelect = 
        `SELECT Reportid, ReportTitle, Date_Format(ReportDate,'%m/%d/%Y %h:%i %p') As Date, BuildingName, ReportType, ReportNote
        FROM reports
        WHERE BuildingName = ? AND ReportTitle IS NOT NULL
        ORDER BY Date Desc`;
        
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

app.get('/recentReports', (req, res)=>{
    const sqlSelect = 
    `SELECT Reportid, ReportTitle,  Date_Format(ReportDate,'%m/%d/%Y %h:%i') As Date , BuildingName, ReportType, ReportNote
    FROM reports
    ORDER BY Date Desc
    LIMIT 3`;
    db.query(sqlSelect, (err, data)=> {
        if(err) return res.json(err);
        return res.json(data);
    })
});


app.get('/reportCount', (req, res)=>{
    const sqlSelect = 
    `SELECT BuildingName, COUNT(Reportid) as repCount
    FROM reports
    group by BuildingName`;
    db.query(sqlSelect, [], (err, data)=> {
        if(err) return res.json(err);
        return res.json(data);
    })
});

app.get('/reportsByType', (req, res)=>{
    const sqlSelect = 
    `SELECT ReportType, COUNT(Reportid) AS TotalCount
    FROM reports
    GROUP BY ReportType
    ORDER BY ReportType`;
    db.query(sqlSelect, [], (err, data)=> {
        if(err) return res.json(err);
        return res.json(data);
    })
});

app.get('/top5Buildings', (req, res)=>{
    const sqlSelect = 
    `SELECT BuildingName, COUNT(Reportid) AS TotalCount
    FROM reports
    GROUP BY BuildingName
    ORDER BY COUNT(Reportid) DESC
    LIMIT 5`;
    db.query(sqlSelect, [], (err, data)=> {
        if(err) return res.json(err);
        return res.json(data);
    })
});

app.get('/reportsByMonth', (req, res)=>{
    const sqlSelect = 
    `SELECT YEAR(ReportDate) AS ReportYear, MONTH(ReportDate) AS ReportMonth, COUNT(Reportid) AS TotalCount
    FROM reports
    WHERE year(reportDate) = year(curdate())
    GROUP BY year(ReportDate), month(ReportDate)
    ORDER BY month(ReportDate)`;
    db.query(sqlSelect, [], (err, data)=> {
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

app.delete('/delete', (req, res) => {
    const sql = "DELETE FROM reports WHERE Reportid = ?";
    db.query(sql, [req.query.Reportid], (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
});





app.listen(8081, ()=> {
    console.log("listening...");
});

