"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handleCastError = () => {
    const errors = [
        {
            path: '',
            message: 'Invalid Id',
        },
    ];
    const statusCode = 400;
    return {
        statusCode,
        message: 'Cast Error',
        errorMessages: errors,
    };
};
exports.default = handleCastError;
