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
exports.bookService = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const insertIntoDb = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.book.create({
        data,
        include: {
            category: true,
        },
    });
    return result;
});
const getAllBook = (searchTerm, sortBy, sortOrder, page, size, filterData, filterConditions) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.book.findMany({
        include: {
            category: true,
        },
        where: Object.assign(Object.assign({}, filterConditions), { OR: [
                {
                    title: {
                        contains: searchTerm,
                        mode: 'insensitive',
                    },
                },
                {
                    author: {
                        contains: searchTerm,
                        mode: 'insensitive',
                    },
                },
                {
                    genre: {
                        contains: searchTerm,
                        mode: 'insensitive',
                    },
                },
            ], category: {
                id: {
                    equals: filterData.category,
                    mode: 'insensitive',
                },
            } }),
        take: size,
        skip: (page - 1) * size,
        orderBy: {
            [sortBy]: sortOrder,
        },
    });
    const total = yield prisma.book.count();
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
const getBooksByCategoryId = (categoryId, page, size) => __awaiter(void 0, void 0, void 0, function* () {
    const skip = (page - 1) * size;
    const [books, totalCount] = yield Promise.all([
        prisma.book.findMany({
            where: {
                categoryId,
            },
            include: {
                category: true,
            },
            skip,
            take: size,
        }),
        prisma.book.count({
            where: {
                categoryId,
            },
        }),
    ]);
    return { books, totalCount };
});
const getSingleBook = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.book.findUnique({
        where: {
            id,
        },
    });
    return result;
});
const updateBook = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.book.update({
        where: {
            id,
        },
        data: payload,
    });
    return result;
});
const deleteBook = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.book.delete({
        where: {
            id,
        },
    });
    return result;
});
exports.bookService = {
    insertIntoDb,
    getAllBook,
    getSingleBook,
    updateBook,
    deleteBook,
    getBooksByCategoryId,
};
