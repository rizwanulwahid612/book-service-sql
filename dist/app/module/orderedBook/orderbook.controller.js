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
exports.orderbookController = void 0;
const orderbook_service_1 = require("./orderbook.service");
const insertIntiDB = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield orderbook_service_1.orderedbookService.insertIntoDb(req.body);
        res.send({
            success: true,
            statusCode: 200,
            message: 'Orderedbook created successfully!',
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
const findAllOrderedbook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield orderbook_service_1.orderedbookService.getAllOrderedBook();
        res.send({
            success: true,
            statusCode: 200,
            message: 'Orderbook fetched successfully!',
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
const getSingleOrderbook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield orderbook_service_1.orderedbookService.getSingleOrderedBook(req.params.id);
        res.send({
            success: true,
            statusCode: 200,
            message: 'Single Orderbook fetched successfully!',
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
const updateOrderbook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield orderbook_service_1.orderedbookService.updateOrderedBook(req.params.id, req.body);
    res.send({
        success: true,
        statusCode: 200,
        message: 'Orderbook updated successfully!',
        data: result,
    });
});
const deleteOrderbook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield orderbook_service_1.orderedbookService.deleteOrderedbook(req.params.id);
    res.send({
        success: true,
        statusCode: 200,
        message: 'Orderbook deleted successfully!',
        data: result,
    });
});
exports.orderbookController = {
    insertIntiDB,
    findAllOrderedbook,
    getSingleOrderbook,
    updateOrderbook,
    deleteOrderbook,
};
