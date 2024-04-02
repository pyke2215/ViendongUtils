const appErr = (message, statusCode) =>{
    let err = new Error(message);
    err.statusCode = statusCode ? statusCode : 500;
    err.stack = err.stack;
    return err;
};

class AppError extends Error{
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        this.status = "failed";
    };
}

module.exports = {appErr, AppError};

