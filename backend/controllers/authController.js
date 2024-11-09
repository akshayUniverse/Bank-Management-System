const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const registerUser = async(req,res) => {
    try{
        const{ username,email,password } = req.body;
        const hashedPassword = await bcrypt.hash(password,10);
        const newUser = new User({username,email,password: hashedPassword});
        await newUser.save();

        const token = jwt.sign({ userId:newUser._id },process.env.JWT_SECRET,{ expiresIn: '1h' });

        res.cookie('token',token,{httpOnly:true,secure: process.env.NODE_ENV === 'production',maxAge:3600000 });
        
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

        res.cookie('token',token,{ httpOnly:true });
        res.status(200).json({ message: 'Login successful' });
    }   catch (error){
        res.status(500).json({ error: error.message });
    }
};


module.exports = {registerUser , loginUser };