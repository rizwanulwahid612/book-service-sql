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
exports.bookController = void 0;
const book_service_1 = require("./book.service");
const insertIntoDB = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield book_service_1.bookService.insertIntoDb(req.body);
        res.send({
            success: true,
            statusCode: 200,
            message: 'Book created successfully!',
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
const findAllBooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const _a = req.query, { page = 1, size = 10, sortBy = 'price', sortOrder = 'asc', searchTerm = '', minPrice, maxPrice } = _a, filterData = __rest(_a, ["page", "size", "sortBy", "sortOrder", "searchTerm", "minPrice", "maxPrice"]);
        const filterConditions = {};
        if (minPrice !== undefined && !isNaN(Number(minPrice))) {
            filterConditions.price = {
                gte: Number(minPrice),
            };
        }
        if (maxPrice !== undefined && !isNaN(Number(maxPrice))) {
            filterConditions.price = Object.assign(Object.assign({}, filterConditions.price), { lte: Number(maxPrice) });
        }
        const result = yield book_service_1.bookService.getAllBook(String(searchTerm), String(sortBy), sortOrder, Number(page), Number(size), filterData, filterConditions);
        res.send({
            success: true,
            statusCode: 200,
            message: 'Books fetched successfully!',
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
const getBooksByCategoryId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { categoryId } = req.params;
        const page = parseInt(req.query.page) || 1;
        const size = parseInt(req.query.size) || 10;
        const result = yield book_service_1.bookService.getBooksByCategoryId(categoryId, page, size);
        res.send({
            success: true,
            statusCode: 200,
            message: 'Books with associated category data fetched successfully',
            meta: {
                page,
                size,
                total: result.totalCount,
                totalPage: Math.ceil(result.totalCount / size),
            },
            data: result.books,
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
const getSingleBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_service_1.bookService.getSingleBook(req.params.id);
    res.send({
        success: true,
        statusCode: 200,
        message: 'Single Book fetched successfully!',
        data: result,
    });
});
const updateBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_service_1.bookService.updateBook(req.params.id, req.body);
    res.send({
        success: true,
        statusCode: 200,
        message: 'Book updated successfully!',
        data: result,
    });
});
const deleteBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_service_1.bookService.deleteBook(req.params.id);
    res.send({
        success: true,
        statusCode: 200,
        message: 'Book deleted successfully!',
        data: result,
    });
});
exports.bookController = {
    insertIntoDB,
    findAllBooks,
    getSingleBook,
    updateBook,
    deleteBook,
    getBooksByCategoryId,
};
