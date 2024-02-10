const {StatusCodes} = require('http-status-codes');
const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if(!authHeader || !authHeader.startsWith('Bearer ')){
        return res.status(StatusCodes.UNAUTHORIZED).send({message: "Authenticate first"})
    }

    try {
        const token = authHeader.split(' ')[1];
        const {userId} = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = userId;
        next();
    } catch (error) {
        console.log(error);
    }
}

module.exports = authMiddleware;