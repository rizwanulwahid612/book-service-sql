import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { categoryController } from './category.controller';

const router = express.Router();
router.post('/', auth(ENUM_USER_ROLE.ADMIN), categoryController.insertIntiDB);
router.get('/', categoryController.findAllCategory);
router.get('/:id', categoryController.getSingleCategory);
router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  categoryController.updateCategory
);
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  categoryController.deleteCategory
);
export const categoriesRouter = router;
