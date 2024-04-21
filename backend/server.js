const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const app = express();

app.use(cors());
app.use(express.json()); // Add this line to parse JSON bodies

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "clsf_church"
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Connected to database');
});

app.get("/Donation", (req, res) => {
    const sql = "SELECT * FROM donation";
    db.query(sql, (err, data) => {
        if (err) return res.json("error");
        return res.json(data);
    });
});

app.post('/Donation', (req, res) => {
    const sql = "INSERT into donation (`Name`, `amount`) VALUES ?";
    const values = [
        [req.body.Name, req.body.amount] // Correct the order of values
    ];
    db.query(sql, [values], (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

const port = 8081;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
