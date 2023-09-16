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
exports.orderController = void 0;
const order_service_1 = require("./order.service");
const insertIntiDB = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield order_service_1.orderService.insertIntoDb(req.body);
        res.send({
            success: true,
            statusCode: 200,
            message: 'Order created successfully!',
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
const findAllOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield order_service_1.orderService.getAllOrder();
        res.send({
            success: true,
            statusCode: 200,
            message: 'Order fetched successfully!',
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
const getSingleOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield order_service_1.orderService.getSingleOrder(req.params.id);
        res.send({
            success: true,
            statusCode: 200,
            message: 'Single Order fetched successfully!',
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
const updateOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_service_1.orderService.updateOrder(req.params.id, req.body);
    res.send({
        success: true,
        statusCode: 200,
        message: 'Order updated successfully!',
        data: result,
    });
});
const deleteOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_service_1.orderService.deleteOrder(req.params.id);
    res.send({
        success: true,
        statusCode: 200,
        message: 'Order deleted successfully!',
        data: result,
    });
});
exports.orderController = {
    insertIntiDB,
    findAllOrder,
    getSingleOrder,
    updateOrder,
    deleteOrder,
};
