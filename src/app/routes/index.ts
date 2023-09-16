import express from 'express';
import { authRouth } from '../module/auth/auth.route';
import { booksRouter } from '../module/book/book.route';
import { categoriesRouter } from '../module/category/category.routh';
import { orderRouter } from '../module/order/order.route';
import { orderbookRouter } from '../module/orderedBook/orderedbook.route';
import { reviewRatingRouter } from '../module/reviewrating/reviewrating.route';
import { usersRouter } from '../module/users/users.route';

const router = express.Router();

const moduleRoutes = [
  // ... routes
  {
    path: '/users',
    route: usersRouter,
  },
  {
    path: '/categories',
    route: categoriesRouter,
  },
  {
    path: '/books',
    route: booksRouter,
  },
  {
    path: '/orders',
    route: orderRouter,
  },
  {
    path: '/review',
    route: reviewRatingRouter,
  },
  {
    path: '/orderedbook',
    route: orderbookRouter,
  },
  {
    path: '/auth',
    route: authRouth,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
