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
exports.orderService = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const insertIntoDb = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.order.create({
        data,
        include: {
            users: true,
            orderedBooks: true,
        },
    });
    return result;
});
const getAllOrder = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.order.findMany({
        include: {
            users: true,
            orderedBooks: true,
        },
    });
    return result;
});
const getSingleOrder = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.order.findUnique({
        where: {
            id,
        },
        include: {
            orderedBooks: {
                select: {
                    bookId: true,
                    quantity: true,
                },
            },
        },
    });
    return result;
});
const updateOrder = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.order.update({
        where: {
            id,
        },
        data: payload,
    });
    return result;
});
const deleteOrder = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.order.delete({
        where: {
            id,
        },
    });
    return result;
});
exports.orderService = {
    insertIntoDb,
    getAllOrder,
    getSingleOrder,
    updateOrder,
    deleteOrder,
};
