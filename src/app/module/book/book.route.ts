import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { bookController } from './book.controller';

const router = express.Router();
router.post(
  '/create-book',
  auth(ENUM_USER_ROLE.ADMIN),
  bookController.insertIntoDB
);

router.get('/', bookController.findAllBooks);
router.get('/:id', bookController.getSingleBook);
router.get('/:categoryId/category', bookController.getBooksByCategoryId);
router.patch('/:id', auth(ENUM_USER_ROLE.ADMIN), bookController.updateBook);
router.delete('/:id', auth(ENUM_USER_ROLE.ADMIN), bookController.deleteBook);
export const booksRouter = router;
