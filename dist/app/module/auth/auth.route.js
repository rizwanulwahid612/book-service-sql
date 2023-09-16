"use strict";
// auth.route.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouth = void 0;
const express_1 = __importDefault(require("express"));
const auth_controller_1 = require("./auth.controller");
const router = express_1.default.Router();
// User sign-up route
router.post('/signup', auth_controller_1.authController.signUp);
router.get('/getAllSignUp', auth_controller_1.authController.getsignUpUser);
//User sign-in route
router.post('/signin', auth_controller_1.authController.signIn);
exports.authRouth = router;
