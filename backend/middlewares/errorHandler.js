const {StatusCodes} = require('http-status-codes');

const errorHandlerMiddleware = (err, req, res, next) =>{
    const customError ={
        statusCode : err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
        msg: err.message || "Something went wrong, please try again later"
    }
    if (err.name === 'ValidationError') {
        customError.msg = Object.values(err.errors)
          .map((item) => item.message)
          .join(',')
        customError.statusCode = StatusCodes.BAD_REQUEST;
      }
      if (err.code && err.code === 11000) {
        customError.msg = `${Object.keys(err.keyValue)} ${Object.values(err.keyValue)} already exist, please choose another value`
        customError.statusCode = StatusCodes.BAD_REQUEST;
      }
      if (err.name === 'CastError') {
        customError.msg = `No item found with id : ${err.value}`
        customError.statusCode = StatusCodes.NOT_FOUND;
      }
    
      return res.status(customError.statusCode).send({ msg: customError.msg })
}

module.exports = errorHandlerMiddleware;