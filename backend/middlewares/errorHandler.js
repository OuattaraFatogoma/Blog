const errorHandlerMiddleware = (err, req, res, next) =>{

    res.status(500).json(err);
}

module.exports = errorHandlerMiddleware;