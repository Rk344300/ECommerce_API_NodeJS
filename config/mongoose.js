
//Getting mongoose package
const mongoose = require('mongoose');

//Connecting to Mongodb database
mongoose.connect('mongodb://127.0.0.1:27017/ecommercedb');

//Acquiring the connection
const db = mongoose.connection;

//If connection fails
db.on("error", console.error.bind(console, "Error connection to Database"));

//If successfully connected
db.once("open", function () {
    console.log("Successfully connected to Database");
});

