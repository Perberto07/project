const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const app = express();
const multer = require("multer");
const path = require("path");


app.use(cors());
app.use(express.json()); // Add this line to parse JSON bodies

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'src/images'); // Change db to cb
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname)); // Change res to cb
    }
})
const Upload = multer({
    storage: storage
})

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
    const sql = "INSERT INTO donation (`Name`, `amount`) VALUES ?";
    const values = [
        [req.body.name, req.body.amount] // Corrected the order and wrapped in an array
    ];
    db.query(sql, [values], (err, result ) => {
        if (err) return res.json(err);
        return res.json(result);
    });
});

app.post('/login', (req, res) => {
    const sql = "SELECT * FROM login WHERE username=? AND password = ?";
    const values = [
        req.body.username, 
        req.body.password // Correct the order of values
    ];
    db.query(sql, [req.body.username, req.body.password], (err, data) => {
        if (err) return res.json("error");
        if(data.length > 0){
            return res.json('/')
        }
        else{
            return res.json("No record")
        }
    });
});


app.post('/admin', Upload.single('image'), (req, res) => {
    console.log(req.file);
});


const port = 8081;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});``
