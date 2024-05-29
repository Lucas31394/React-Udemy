const User = require("../models/User");
const jwt = required("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET;

const authGuard = async(req, res, next) => {
    const authHeader = req.headers["authorization"];

    const token = authHeader && authHeader.split(" ")[1];

    // Check if the header has a token
    if(!token) {
        return res.status(401).json({errors: ["Access denied!"]});
    }

    // Check if the token is valid
    try {
        const verified = jwt.verify(token, jwtSecret);

        req.User = await User.findById(verified.id).select("-password");

        next();
    } catch (error) {
        return res.status(401).json({errors: ["Invalid token!"]});
    }
};

module.exports = authGuard