import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { orderController } from './order.controller';

const router = express.Router();
router.post(
  '/create-order',
  auth(ENUM_USER_ROLE.CUSTOMER),
  orderController.insertIntiDB
);
router.get(
  '/',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.CUSTOMER),
  // auth(ENUM_USER_ROLE.CUSTOMER),
  orderController.findAllOrder
);
router.get(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.CUSTOMER),
  orderController.getSingleOrder
);
router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.CUSTOMER),
  orderController.updateOrder
);
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.CUSTOMER),
  orderController.deleteOrder
);
export const orderRouter = router;
