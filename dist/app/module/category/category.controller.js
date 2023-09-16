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
exports.categoryController = void 0;
const category_service_1 = require("./category.service");
const insertIntiDB = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield category_service_1.categoryService.insertIntoDb(req.body);
        res.send({
            success: true,
            statusCode: 200,
            message: 'Category created successfully!',
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
const findAllCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield category_service_1.categoryService.getAllCategory();
        res.send({
            success: true,
            statusCode: 200,
            message: 'Category fetched successfully!',
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
const getSingleCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield category_service_1.categoryService.getSingleCategory(req.params.id);
        res.send({
            success: true,
            statusCode: 200,
            message: 'Single Category fetched successfully!',
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
const updateCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield category_service_1.categoryService.updateCategory(req.params.id, req.body);
    res.send({
        success: true,
        statusCode: 200,
        message: 'Category updated successfully!',
        data: result,
    });
});
const deleteCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield category_service_1.categoryService.deleteCategory(req.params.id);
    res.send({
        success: true,
        statusCode: 200,
        message: 'Category deleted successfully!',
        data: result,
    });
});
exports.categoryController = {
    insertIntiDB,
    findAllCategory,
    getSingleCategory,
    updateCategory,
    deleteCategory,
};
