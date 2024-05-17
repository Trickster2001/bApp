require('dotenv').config();
const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!")
})

app.get("/twit", (req, res) => {
  res.send("helo");
})

app.listen(process.env.PORT, () => {
  console.log("running the app on port ", port);
})