"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderbookRouter = void 0;
const express_1 = __importDefault(require("express"));
const orderbook_controller_1 = require("./orderbook.controller");
const router = express_1.default.Router();
router.post('/', orderbook_controller_1.orderbookController.insertIntiDB);
router.get('/', orderbook_controller_1.orderbookController.findAllOrderedbook);
router.get('/:id', orderbook_controller_1.orderbookController.getSingleOrderbook);
router.patch('/:id', orderbook_controller_1.orderbookController.updateOrderbook);
router.delete('/:id', orderbook_controller_1.orderbookController.deleteOrderbook);
exports.orderbookRouter = router;
