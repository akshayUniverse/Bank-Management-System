const express = require("express");
const router = express.Router();
const { updateUserRole } = require("../controllers/userController");
const { checkRolePermission } = require("../middlewares/roleMiddleware");
const { verifyToken, checkAdminRole } = require('../middleware/authMiddleware'); 

router.put("/admin/user/:id/role", verifyToken, checkAdminRole, checkRolePermission("edit_user"), updateUserRole);

module.exports = router;