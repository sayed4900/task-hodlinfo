const express = require('express');
const axios = require('axios');
const mongoose = require('mongoose');
require('dotenv').config();

const coinRoutes = require('./routes/coinRoutes');

const app = express();

// Connect to MongoDB
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
mongoose.connect(
    process.env.DB_CONNECT,
    {
        useNewUrlParser: true,
    },
    () => {
        console.log("Connect to DB");
    }
);


app.use('/',coinRoutes)

const port = process.env.PORT || 3000 ;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});