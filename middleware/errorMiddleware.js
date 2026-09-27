const errorMiddleware = (error, req, res, next )=>{


    if (error.name === "ValidationError") {
    return res.status(400).json({
        message: error.message
    });
}
     if (error.name === "CastError") {
        return res.status(400).json({
            message: error.message
        });
    }

    res.status(error.statusCode || 500).json({
        message: error.message,
    })

}

module.exports = errorMiddleware;