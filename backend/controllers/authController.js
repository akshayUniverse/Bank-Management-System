const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const registerUser = async(req,res) => {
     console.log("Request body:" , req.body);
    try{
        const{ name,username,email,password ,dob, contactNumber, accountNumber, bankName, bankBalance} = req.body;
            
            const userExists = await User.findOne({ email });
            if (userExists) {
                return res.status(400).json({ message: 'User already exists' });
            }
    
        if(!username || !email || !password){
            return res.status(400).json({error:"Please provide all required fields "});
        }
        const hashedPassword = await bcrypt.hash(password,10);
        const newUser = new User({
            name,
            username,
            email,
            password: hashedPassword,
            dob,
            contactNumber,
            accountNumber,
            bankName,
            bankBalance,});
        await newUser.save();

        const token = jwt.sign({ userId:newUser._id },process.env.JWT_SECRET,{ expiresIn: '1h' });

        res.cookie('token',token,{ httpOnly:true,secure: process.env.NODE_ENV === 'production',maxAge:3600000 });
        
        res.status(201).json({message:'User registered successfully'});
    }   catch(error){
        res.status(500).json({error:error.message});
    }
};

const loginUser = async (req,res) =>{
    try{
        const { email,password } = req.body;
        const user = await User.findOne({email});
        if(!user) return res.status(404).json({message:'User not found'});
       
        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch) return res.status(400).json({ message:'Invalid password' });
       
        const token = jwt.sign({userId:user._id },process.env.JWT_SECRET,{ expiresIn:'1h' });

        res.cookie('token',token,{ httpOnly:true , secure: process.env.NODE_ENV === 'production' , maxAge: 3600000 });
        res.status(200).json({ message: 'Login successful' });
    }   catch (error){
        res.status(500).json({ error: error.message });
    }
};


const getUserInfo = async (req, res) =>{
    try{
        const user = await User.findById(req.user.id).select('-password');
        if(!user){
            return res.status(404).json({ message: 'User not found'});
        }
        res.json(user);
    }   catch(error){
        console.error(error);
        res.status(500).json({ message: 'Server error '});
    }
};

module.exports = {registerUser , loginUser , getUserInfo };