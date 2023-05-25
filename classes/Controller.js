// class HttpError extends Error {
//     static messagesList = {
//         400: "Bad Request",
//         401: "Unauthorized",
//         403: "Forbidden",
//         404: "Not Found",
//         409: "Conflict"
//     }

//     constructor(status, message) {
//         const errorMessage = message || this.messagesList[status];
//         super(errorMessage);
//         this.status = status;
//     }
// }

class Controller {
    static messagesList = {
        400: "Bad Request",
        401: "Unauthorized",
        403: "Forbidden",
        404: "Not Found",
        409: "Conflict"
    }

    constructor(model) {
        this.model = model;
    }

    createError(status, message) {
        const errorMessage = message || this.messagesList[status];
        const error = new Error(errorMessage);
        error.status = status;
        return error;
    }

    ctrlWrapper(ctrl) {
        const func = async(req, res, next)=> {
            try {
                await ctrl(req, res, next);
            }
            catch(error){
                next(error);
            }
        };
    
        return func;
    }
}

module.exports = Controller;