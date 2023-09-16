"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_route_1 = require("../module/auth/auth.route");
const book_route_1 = require("../module/book/book.route");
const category_routh_1 = require("../module/category/category.routh");
const order_route_1 = require("../module/order/order.route");
const orderedbook_route_1 = require("../module/orderedBook/orderedbook.route");
const reviewrating_route_1 = require("../module/reviewrating/reviewrating.route");
const users_route_1 = require("../module/users/users.route");
const router = express_1.default.Router();
const moduleRoutes = [
    // ... routes
    {
        path: '/users',
        route: users_route_1.usersRouter,
    },
    {
        path: '/categories',
        route: category_routh_1.categoriesRouter,
    },
    {
        path: '/books',
        route: book_route_1.booksRouter,
    },
    {
        path: '/orders',
        route: order_route_1.orderRouter,
    },
    {
        path: '/review',
        route: reviewrating_route_1.reviewRatingRouter,
    },
    {
        path: '/orderedbook',
        route: orderedbook_route_1.orderbookRouter,
    },
    {
        path: '/auth',
        route: auth_route_1.authRouth,
    },
];
moduleRoutes.forEach(route => router.use(route.path, route.route));
exports.default = router;
