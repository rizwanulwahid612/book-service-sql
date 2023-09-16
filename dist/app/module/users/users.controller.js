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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const users_service_1 = require("./users.service");
const insertIntiDB = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield users_service_1.userService.insertIntoDb(req.body);
        res.send({
            success: true,
            statusCode: 200,
            message: 'User created successfully!',
            data: result,
        });
    }
    catch (error) {
        res.status(400).json({
            status: 'error',
            message: 'Something Went Wrong',
            error,
        });
    }
});
// Import JwtPayload
// ...
// ...
const findAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const _a = req.query, { size = 10, page = 1, sortBy = 'createdAt', sortOrder = 'asc', searchTerm = '' } = _a, filterData = __rest(_a, ["size", "page", "sortBy", "sortOrder", "searchTerm"]);
        const result = yield users_service_1.userService.getAlluser(String(searchTerm), String(sortBy), sortOrder, Number(size), Number(page), filterData);
        res.send({
            success: true,
            statusCode: 200,
            message: 'User fetched successfully!',
            meta: result.meta,
            data: result.data,
        });
    }
    catch (error) {
        res.status(400).json({
            status: 'error',
            message: 'Something Went Wrong',
            error,
        });
    }
});
const getSingleUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield users_service_1.userService.getSingleuser(req.params.id);
        res.send({
            success: true,
            statusCode: 200,
            message: 'Single User fetched successfully!',
            data: result,
        });
    }
    catch (error) {
        res.status(400).json({
            status: 'error',
            message: 'Something Went Wrong',
            error,
        });
    }
});
const updateUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield users_service_1.userService.updateUser(req.params.id, req.body);
    res.send({
        success: true,
        statusCode: 200,
        message: 'User updated successfully!',
        data: result,
    });
});
const deleteUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield users_service_1.userService.deleteUser(req.params.id);
    res.send({
        success: true,
        statusCode: 200,
        message: 'User deleted successfully!',
        data: result,
    });
});
exports.userController = {
    insertIntiDB,
    findAllUsers,
    getSingleUsers,
    updateUsers,
    deleteUsers,
};
