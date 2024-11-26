const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

const{ registerUser , loginUser ,getUserInfo, getAllUsers , getAccountInfo} = require('../controllers/authController');
const{ updateUserRole,adminProtectedRoute } = require('../controllers/userController');


const { verifyToken , checkAdminRole } = require('../middleware/authMiddleware');
const { checkRolePermission } = require("../middleware/roleMiddleware");


router.post('/register',registerUser);
router.post('/login',loginUser);

router.get('/me',verifyToken,authController.getUserInfo);

router.get("/admin/users", verifyToken, checkRolePermission("view_all_users"), authController.getAllUsers );

router.get("/account", verifyToken , checkRolePermission("view_own_account"), authController.getAccountInfo );

router.put('/admin/user/:id/role', verifyToken , checkAdminRole , updateUserRole);

router.get('/admin/some-protected-route', verifyToken , checkAdminRole, adminProtectedRoute);

router.post('/transaction',verifyToken,(req,res)=>{
    // handle transaction logic
    res.status(200).json({message:'Transaction completed successfully'});
});

module.exports = router;