import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { userController } from './users.controller';

const router = express.Router();
router.post('/', auth(ENUM_USER_ROLE.ADMIN), userController.insertIntiDB);
router.get('/', auth(ENUM_USER_ROLE.ADMIN), userController.findAllUsers);
router.get('/:id', auth(ENUM_USER_ROLE.ADMIN), userController.getSingleUsers);
router.patch('/:id', auth(ENUM_USER_ROLE.ADMIN), userController.updateUsers);
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.CUSTOMER),
  userController.deleteUsers
);
// router.get(
//   '/profile',
//   auth(ENUM_USER_ROLE.CUSTOMER, ENUM_USER_ROLE.ADMIN),
//   userController.getUserProfile
// );
export const usersRouter = router;
