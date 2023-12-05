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

app.get('/buildings', (req, res)=>{
    const sqlSelect = "SELECT * FROM building_information";
    db.query(sqlSelect, (err, data)=> {
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



app.listen(8081, ()=> {
    console.log("listening...");
});

