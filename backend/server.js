const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors({ origin: "http://localhost:3000" }));

const mysql = require("mysql2");
// const PORT = process.env.PORT || 3000;

const connection = mysql.createConnection({
  host: "127.0.0.1",
  port: "3366",
  user: "root",
  password: "okok",
  database: "accordian_data",
});
app.get("/sections", (req, res) => {
  connection.query("SELECT * FROM accordion_sections", (err, results) => {
    if (err) throw err;
    console.log("Results:", results);
    res.json(results);
  });
});

app.listen(3002, () => {
  console.log("Server started on port 3002");
});
