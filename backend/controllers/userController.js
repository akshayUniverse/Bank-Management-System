const { checkAdminRole } = require('../middleware/authMiddleware');
const User = require("../models/User");

const updateUserRole = async(req,res) => {
    const { id } = req.params;
    const { role } = req.body;

    try{
        const user = await User.findByIdAndUpdate(id,{ role }, { new: true});
        if(!user) return res.status(404).json({ message: "User not found" });

        res.status(200).json({ message: "Role updated successfully", user });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const adminProtectedRoute = (req,res) => {
    res.status(200).json({ message: 'Admin access granted'});
};

module.exports = { updateUserRole , adminProtectedRoute };