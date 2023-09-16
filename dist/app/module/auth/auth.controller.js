"use strict";
// auth.controller.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authController = void 0;
const auth_service_1 = require("./auth.service");
const signUp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, password, role, contactNo, address, profileImg } = req.body;
        const newUser = yield auth_service_1.authService.signUp(name, email, password, role, contactNo, address, profileImg);
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: 'User created successfully!',
            data: newUser,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            statusCode: 400,
            message: 'Something Went Wrong',
            //error: error.message,
        });
    }
});
const getsignUpUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield auth_service_1.authService.getAllSignUpusers();
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: 'SignUp user get successfully!',
            data: result,
        });
    }
    catch (error) {
        res.status(401).json({
            success: false,
            statusCode: 401,
            message: 'Unauthorized',
            // error: error.message,
        });
    }
});
const signIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const token = yield auth_service_1.authService.signIn(email, password);
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: 'User signin successfully!',
            token,
        });
    }
    catch (error) {
        res.status(401).json({
            success: false,
            statusCode: 401,
            message: 'Unauthorized',
            // error: error.message,
        });
    }
});
// auth.controller.ts
// ...existing code...
exports.authController = {
    signUp,
    signIn,
    getsignUpUser,
};
