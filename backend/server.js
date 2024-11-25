
require('dotenv').config({ path: './backend/.env' });
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');

const connectDB = require('./config/db');
connectDB();


const testModule = require('./testModule');
const express = require('express');  // Import express
const cors = require('cors');
const app = express(); // initialize express app
app.use(cors({
    origin: 'http://127.0.0.1:3000', // Replace with the frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true // Allow cookies to be sent with requests
  }));
  
  app.use(express.json());
const cookieParser = require('cookie-parser');
app.use(cookieParser());


app.use('/api/users',userRoutes);
app.use('/api',userRoutes);

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