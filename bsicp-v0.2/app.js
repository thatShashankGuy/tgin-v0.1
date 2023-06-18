const env = require('dotenv').config();
const mongoose = require('mongoose')
const express = require('express');


mongoose.connect('mongodb://localhost:27017/bsicp-db')
const app = express();

app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); 

app.listen('3000',()=>{
    console.log("app running on localhost:3000")
})