import { Request, Response } from 'express';
import { reviewRatingService } from './reviewrating.service';

const insertIntiDB = async (req: Request, res: Response) => {
  try {
    const result = await reviewRatingService.insertIntoDb(req.body);
    res.send({
      success: true,
      statusCode: 200,
      message: 'ReviewRating created successfully!',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: 'Something Went Wrong',
      error,
    });
  }
};
const findAllReviewRating = async (req: Request, res: Response) => {
  try {
    const result = await reviewRatingService.getAllReviewRating();
    res.send({
      success: true,
      statusCode: 200,
      message: 'FindAll ReviewRating  fetched successfully!',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: 'Something Went Wrong',
      error,
    });
  }
};
const getSingleReviewRating = async (req: Request, res: Response) => {
  try {
    const result = await reviewRatingService.getSingleReviewRating(
      req.params.id
    );
    res.send({
      success: true,
      statusCode: 200,
      message: 'Single ReviewRating fetched successfully!',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: 'Something Went Wrong',
      error,
    });
  }
};
const updateReviewRating = async (req: Request, res: Response) => {
  const result = await reviewRatingService.updateReviewRating(
    req.params.id,
    req.body
  );
  res.send({
    success: true,
    statusCode: 200,
    message: 'ReviewRating updated successfully!',
    data: result,
  });
};
const deleteReviewRating = async (req: Request, res: Response) => {
  const result = await reviewRatingService.deleteReviewRating(req.params.id);
  res.send({
    success: true,
    statusCode: 200,
    message: 'ReviewRating deleted successfully!',
    data: result,
  });
};
export const reviewRatingController = {
  insertIntiDB,
  findAllReviewRating,
  getSingleReviewRating,
  updateReviewRating,
  deleteReviewRating,
};
