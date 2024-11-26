const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './backend/.env' });


const connectDB = require('./config/db');
connectDB();


const User = require('./models/User');

const testUser = async () => {
  try {
    const newUser = new User({
      
        "name": "akshay",
        "username": "askeyraj",
        "email": "akshay@example.com",
        "password": "akshay123",
        "dob": "08-12-2000",
        "contactNumber": "1234567890",
        "accountNumber": "9876543210",
        "bankName": "XYZ Bank"
        
    
    
    });

    await newUser.save();  
    console.log('User created successfully:', newUser);

    
    const user = await User.findOne({ email: 'rajkumar@example.com' });
    console.log('User found:', user);

  } catch (error) {
    console.error('Error during testing:', error.message);
  }
};



module.exports = testUser;