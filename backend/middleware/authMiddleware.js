const jwt = require('jsonwebtoken');

const verifyToken = (req , res , next) => {
    const token = req.cookies.token || req.headers['authorization']?.split(' ')[1];

    if(!token){
        return res.status(403).json({ message: 'No token provided , authorization denied '});
    }

    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        req.user = { id: decoded.userId ,role: decoded.role};
        next();
    } 
      catch(error){
        res.status(401).json({ message: 'Invalid token' });
      }
};


const checkAdminRole = (req,res,next) => {
  const token = req.cookies.token || req.headers['authorization']?.split(' ')[1];
  if(!token){
    return res.status(403).json({ message: 'Access denied. No token provided.'});
  }
  try{
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if(decoded.role !== 'Admin'){
      return res.status(403).json({ message: 'Access denied. You do not have admin privileges.'});
    }
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).json({ message: 'Invalid token'});
  }
};

module.exports = { verifyToken , checkAdminRole };