const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './backend/.env' });


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_CONNECTION);
        console.log('MongoDB connected successfully');
    }
    catch(error){
        console.error('Database connection failed:',error.message);
        process.exit(1);
    }
};

module.exports = connectDB;