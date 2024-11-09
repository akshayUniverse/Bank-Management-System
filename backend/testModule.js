const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './backend/.env' });

// Connect to the database
const connectDB = require('./config/db');
connectDB();

// Import the User model
const User = require('./models/User');

// Create a new user to test the model
const testUser = async () => {
  try {
    const newUser = new User({
      username: 'Akshay karada',
      email: 'rajkumar@example.com',
      password: 'superbmerijaan@1'
    });

    await newUser.save();  // Save the new user to the database
    console.log('User created successfully:', newUser);

    // Find a user by email to test fetching
    const user = await User.findOne({ email: 'rajkumar@example.com' });
    console.log('User found:', user);

  } catch (error) {
    console.error('Error during testing:', error.message);
  }
};

// Call the test function
testUser();

module.exports = testUser;