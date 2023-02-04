const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors({ origin: "http://localhost:3000" }));

const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});
app.get("/sections", (req, res) => {
  connection.query("SELECT * FROM accordion_sections", (err, results) => {
    if (err) throw err;
    console.log("Resultss:", results);
    res.json(results);
  });
});

app.listen(process.env.APP_PORT, () => {
  console.log(`Server started on port ${process.env.APP_PORT}`);
});
