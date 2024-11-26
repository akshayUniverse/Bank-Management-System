
require('dotenv').config({ path: './backend/.env' });
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');

const connectDB = require('./config/db');
connectDB();


const testModule = require('./testModule');
const express = require('express');  
const cors = require('cors');
const app = express(); 
app.use(cors({
    origin: 'http://127.0.0.1:3000', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true 
  }));
  
  app.use(express.json());
const cookieParser = require('cookie-parser');
app.use(cookieParser());


app.use('/api/users',userRoutes);
app.use('/api',userRoutes);

const PORT = process.env.PORT || 5000; 

const DB_CONNECTION = process.env.DB_CONNECTION;
const JWT_SECRET = process.env.JWT_SECRET;

app.get('/',(req,res)=>{               

    res.send('Server is running successfully!');
});

app.listen(PORT,()=>{                  

    console.log(`Server is running on port ${PORT}`);
});


mongoose.connect(process.env.DB_CONNECTION)
.then(()=>console.log("Database connected successfully"))
.catch((error)=> console.error("Database connection error:",error));

testModule();