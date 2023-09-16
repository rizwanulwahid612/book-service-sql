"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handleValidationError = (error //mongoose.Error.ValidationError
) => {
    const errors = Object.values(error).map(() => {
        return {
            path: '',
            message: '',
        };
    });
    const statusCode = 400;
    return {
        statusCode,
        message: 'Validation Error',
        errorMessages: errors,
    };
};
exports.default = handleValidationError;
