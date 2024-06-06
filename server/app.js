const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
const cors = require("cors");
const pool = require("./dbpool");
const axios = require("axios");
const qs = require("qs");
const port = process.env.PORT;

app.use(express.static(path.join(__dirname, "../public")));
app.use(cors());
app.use(bodyParser.json());

app.get("/getuser", async (req, res) => {
  if (req.method !== "GET") {
    res.send({ message: "Unauthorized method" });
    return;
  }
  const userData = qs.stringify(req.query);
  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "http://187.218.23.71/API_REST/api/autorizacion",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: userData,
  };
  const response = await axios.request(config);
  const user = await response.data;

  res.json(user);
});

app.post("/survey", (req, res) => {
  let data = req.body;
  let sql = "INSERT INTO survey SET ?";
  let query = pool.query(sql, data, (err, results) => {
    if (err) throw err;
  });
});

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public", "index.html"), function (err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.listen(port, () => {
  console.log(`This is running at port: ${port}`);
});
