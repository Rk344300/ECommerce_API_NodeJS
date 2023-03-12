// setting up express server
const express = require('express');

//defining the port no.
const port = 8000;

//Setting configuration for mongoose in config folder and requiring here (Connecting to database)
const db = require('./config/mongoose');

const app = express();

const bodyParser = require("body-parser");

//*MIDDLEWARES
//bodyparseer:used to process data sent in an HTTP request body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/json" }));
app.use("/products", require('./routes/product'));

//Running the server on defined por
app.listen(port, function (error) {
    if (error) {
        console.log(`Error in running the server :${port}`)
        return;
    }
    console.log(`Server is running on port :${8000}`);
});
