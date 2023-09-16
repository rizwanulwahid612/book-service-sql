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
exports.orderedbookService = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const insertIntoDb = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.orderedBook.create({
        data,
    });
    return result;
});
const getAllOrderedBook = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.orderedBook.findMany();
    return result;
});
const getSingleOrderedBook = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.orderedBook.findUnique({
        where: {
            id,
        },
    });
    return result;
});
const updateOrderedBook = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.orderedBook.update({
        where: {
            id,
        },
        data: payload,
    });
    return result;
});
const deleteOrderedbook = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.orderedBook.delete({
        where: {
            id,
        },
    });
    return result;
});
exports.orderedbookService = {
    insertIntoDb,
    getAllOrderedBook,
    getSingleOrderedBook,
    updateOrderedBook,
    deleteOrderedbook,
};
