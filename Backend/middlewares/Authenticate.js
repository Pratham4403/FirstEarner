const jwt = require('jsonwebtoken');

const authenticateToken = (req,res,next)=>{
    const token = req.headers.authorization?.split(" ")[1];
     
    if(!token){
        return res.status(403).json({ message: "Access denied. No token provided." });
    }


    try {
        const decoded = jwt.verify(token, "UserFE1878");
        req.user = decoded; 
        next();
    } catch (error) {
        res.status(401).json({ message: "Invalid token." });
    }
};

module.exports = authenticateToken;