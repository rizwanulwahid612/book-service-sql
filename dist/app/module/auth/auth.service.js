"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authService = void 0;
const client_1 = require("@prisma/client");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../../../config"));
const prisma = new client_1.PrismaClient();
const signUp = (name, email, password, role, contactNo, address, profileImg) => __awaiter(void 0, void 0, void 0, function* () {
    // Check if the email is already registered
    const existingUser = yield prisma.user.findUnique({
        where: { email },
    });
    if (existingUser) {
        throw new Error('Email already exists.');
    }
    // Hash the password before storing it in the database
    const hashedPassword = yield bcrypt_1.default.hash(password, 10);
    // Create the new user
    const newUser = yield prisma.user.create({
        data: {
            name,
            email,
            password: hashedPassword,
            role,
            contactNo,
            address,
            profileImg,
        },
    });
    return newUser;
});
const getAllSignUpusers = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.user.findMany();
    return {
        data: result,
    };
});
const signIn = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    // Check if the user with the given email exists
    const user = yield prisma.user.findUnique({
        where: { email },
    });
    if (!user) {
        throw new Error('Invalid email or password.');
    }
    // Compare the provided password with the hashed password in the database
    const passwordMatch = yield bcrypt_1.default.compare(password, user.password);
    if (!passwordMatch) {
        throw new Error('Invalid email or password.');
    }
    // Generate a JWT token for the authenticated user
    const token = jsonwebtoken_1.default.sign({ userId: user.id, role: user.role }, config_1.default.jwt.secret, // Replace with your secret key
    { expiresIn: '1y' } // Set the expiration time as needed
    );
    return token;
});
// auth.service.ts
// ...existing code...
exports.authService = {
    signUp,
    signIn,
    getAllSignUpusers,
};
