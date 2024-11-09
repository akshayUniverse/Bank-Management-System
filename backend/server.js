
require('dotenv').config({ path: './backend/.env' });
const mongoose = require('mongoose');

const connectDB = require('./config/db');
connectDB();

const testModule = require('./testModule');
const express = require('express');  // Import express

const app = express(); // initialize express app

const PORT = process.env.PORT || 5000; // define the port

const DB_CONNECTION = process.env.DB_CONNECTION;
const JWT_SECRET = process.env.JWT_SECRET;

app.get('/',(req,res)=>{               // basic route for testing

    res.send('Server is running successfully!');
});

app.listen(PORT,()=>{                  //start the server

    console.log(`Server is running on port ${PORT}`);
});


mongoose.connect(process.env.DB_CONNECTION)
.then(()=>console.log("Database connected successfully"))
.catch((error)=> console.error("Database connection error:",error));

testModule();