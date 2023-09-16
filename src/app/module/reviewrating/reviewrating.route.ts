import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { reviewRatingController } from './reviewrating.controller';

const router = express.Router();
router.post(
  '/',
  auth(ENUM_USER_ROLE.CUSTOMER),
  reviewRatingController.insertIntiDB
);
router.get(
  '/',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.CUSTOMER),
  reviewRatingController.findAllReviewRating
);
router.get(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  reviewRatingController.getSingleReviewRating
);
router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  reviewRatingController.updateReviewRating
);
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  reviewRatingController.deleteReviewRating
);
export const reviewRatingRouter = router;
