const express = require('express');
const router = express.Router();

const verifyToken = require('../middleware/authMiddleware');

const { registerUser , loginUser } = require('../controllers/authController');

router.post('/register',registerUser);
router.post('/login',loginUser);

router.post('/transaction',verifyToken,(req,res)=>{
    // handle transaction logic
    res.status(200).json({message:'Transaction completed successfully'});
});

module.exports = router;