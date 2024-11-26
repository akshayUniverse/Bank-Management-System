const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String,required:true },
    username: { type: String,required:true },
    email: { type: String,required:true,unique: true,},
    password: { type: String,required:true },
    dob: { type: Date,required: true, },
    contactNumber: { type: String,required: true, },
    accountNumber: { type: String,required: true, },
    bankName: { type: String,required: true, },
    
    role: {
        type:String,
        enum: ["Admin","User","Moderator"],
        default: "User",
    },

    createdAT: { type: Date, default:Date.now}
});

const User = mongoose.model('User',userSchema);
module.exports = User;
