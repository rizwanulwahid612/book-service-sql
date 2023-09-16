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
Object.defineProperty(exports, "__esModule", { value: true });
exports.userService = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const insertIntoDb = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.user.create({
        data,
    });
    return result;
});
const getAlluser = (searchTerm, sortBy, sortOrder, size, page, filterData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.user.findMany({
        include: {},
        where: {
            OR: [
                {
                    name: {
                        contains: searchTerm,
                        mode: 'insensitive',
                    },
                },
                {
                    email: {
                        contains: searchTerm,
                        mode: 'insensitive',
                    },
                },
            ],
            contactNo: {
                equals: filterData.contactNo,
                mode: 'insensitive',
            },
        },
        take: size,
        skip: (page - 1) * size,
        orderBy: {
            [sortBy]: sortOrder,
        },
    });
    const total = yield prisma.user.count();
    return {
        meta: {
            page,
            size,
            total,
            totalPage: Math.ceil(total / size),
        },
        data: result,
    };
});
const getSingleuser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.user.findUnique({
        where: {
            id,
        },
    });
    return result;
});
const updateUser = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.user.update({
        where: {
            id,
        },
        data: payload,
    });
    return result;
});
const deleteUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.user.delete({
        where: {
            id,
        },
    });
    return result;
});
exports.userService = {
    insertIntoDb,
    getAlluser,
    updateUser,
    getSingleuser,
    deleteUser,
};
