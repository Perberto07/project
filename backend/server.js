    const express = require("express");
    const cors = require("cors");
    const mysql = require("mysql");
    const app = express();
    const multer = require("multer");
    const path = require("path");
    const jwt = require("jsonwebtoken");
    const cookieParser = require("cookie-parser");


    app.use(express.json());
    app.use(cookieParser());

    const corsOptions = {
        origin: 'http://localhost:5173', // Replace this with your frontend URL
        credentials: true, // Enable credentials
    };
    
    app.use(cors(corsOptions));

    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, 'uploadImages'); 
        },
        filename: (req, file, cb) => {
            cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname)); 
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

    app.post('/admin', Upload.single('image'), (req, res) => {
        const image = req.file.filename;
        const sql = "INSERT INTO admin (image) VALUES (?)"; // Changed from UPDATE to INSERT
        db.query(sql, [image], (err, result) => {
            if (err) {
                console.error(err);
                return res.json({ Status: "Failed" }); // Respond with Failed status
            } else {
                return res.json({ Status: "Success" }); // Respond with Success status
            }
        });
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

    const verifyUser = (req, res, next) => {
        const token = req.cookies.token;
        if(!token){
            return res.json({Message: "we need token please provide it, login now"})
        }else{
            jwt.verify(token, "our-jsonwebtoken-secret-Key", (err, decoded) =>{
                if(err){
                    return res.json({Message: "Authentication Error."})
                }else{
                    req.name = decoded.name;
                    next();
                } 
            })
        }
    };

    app.get('/login', verifyUser, (req, res) => {
        return res.json({Status: " Success", name: req.name})
    });

    app.post('/login', (req, res) => {
        const sql = "SELECT * FROM login WHERE UserName=? AND Password = ?";
        const values = [
            req.body.username, 
            req.body.password,
        ];
        db.query(sql, values, (err, data) => { // Removed unnecessary array wrapping
            if (err) return res.json("error");
            if(data.length > 0){
                const name = data[0].name;
                const token = jwt.sign({name}, "our-jsonwebtoken-secret-key", {expiresIn: '1d'});
                res.cookie('token', token);
                return res.json({Status: "Success"})
            }
            else{
                return res.json({Message: "No record"});
            }
        });
    });

    app.get("/newsletter", (req, res) => {
        const sql = "select * from newsletter";
        db.query(sql, (err,data) => {
            if(err) return res.json("error");
            return res.json(data);
        })
    });

    app.post('/create', (req, res) =>{
        const sql = "INSERT INTO newsletter (newsTitle, information, bibleverse) VALUES ?";
        const values = [
            [req.body.newsTitle,
            req.body.information,
            req.body.bibleverse]
        ]
        db.query(sql, [values], (err, data) => {
            if (err) return res.status(500).json({ error: err.message });
            return res.json(data);
        });    
    });

    app.put('/update/:id', (req, res) =>{

    const sql = "UPDATE newsletter SET newsTitle = ?, information = ?, bibleverse = ? WHERE ID = ?";
    const values = [
        req.body.newsTitle,
        req.body.information,
        req.body.bibleverse
    ];
    const id = req.params.id;

    db.query(sql, [...values, id], (err, data) => {
        if (err) {
            console.error("Error executing SQL query:", err);
            return res.status(500).json({ error: err.message });
        }
        return res.json(data);
    });    
});

app.delete('/delete/:id', (req, res) =>{
    const sql = "DELETE from newsletter  WHERE ID = ?";
    const id = req.params.id;

    db.query(sql, [id], (err, data) => {
        if (err) return res.json("Error executing SQL query:", err);
            return res.json(data);
    });    
});


    const port = 8081;
    app.listen(port, () => {
        console.log(`Server listening on port ${port}`);
    });
