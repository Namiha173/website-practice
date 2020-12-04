// import express
const express = require("express");
// import cors
const cors = require("cors");
// import mysql
const mysql = require("mysql");

// initialise express
let app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extented: true }));

// create connection to database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "test",
});

// getrequest
app.get("/", (req, res) => {
  connection.query(
    `SELECT * FROM users WHERE email="aara " `,
    (errors, result) => {
      if (errors) throw errors;
      else res.send(result);
    }
  );
});

app.post("/", (req, res) => {
  connection.query(
    `INSERT INTO users2 (UserName,Email,Password,PhoneNo) values(?,?,?,?)`,
    [req.body.UserName, req.body.Email, req.body.Password, req.body.PhoneNo],
    (errors, result) => {
      if (errors) throw errors;
      res.send(result);
    }
  );
});

// to run on port
app.listen(5000, () => console.log("Running on port"));
