"use strict";
const express = require("express");
const cors = require("cors");
const main = require("./main.js");

// create a new Express application instance
const app = express();

//configure the Express middleware to accept CORS requests and parse request body into JSON
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(8000, () => {
  console.log("The server is running on port 8000!");
});

app.get("/sendEmail", async (req, res) => {
  try {
    const mail = await main();
    res.status(200).json(mail);
    console.log("Email sent");
  } catch (error) {
    res.status(500).json(error);
  }
});
