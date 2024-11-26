
const roles = require("../config/roles");

const checkRolePermission = (requiredPermission) => {
    return (req, res, next)=> {
        const userRole = req.user.role;

        if(!roles[userRole] || !roles[userRole].includes(requiredPermission)) {
            return res.status(403).json({ message: "Access Denied"});
        }
        next();
    };
};

module.exports = { checkRolePermission };