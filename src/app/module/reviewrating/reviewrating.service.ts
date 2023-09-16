import { PrismaClient, ReviewAndRating } from '@prisma/client';

const prisma = new PrismaClient();

const insertIntoDb = async (
  data: ReviewAndRating
): Promise<ReviewAndRating> => {
  const result = await prisma.reviewAndRating.create({
    data,
    include: {
      users: true,
      books: true,
    },
  });
  return result;
};
const getAllReviewRating = async () => {
  const result = await prisma.reviewAndRating.findMany({
    include: {
      users: true,
      books: true,
    },
  });
  return result;
};

const getSingleReviewRating = async (
  id: string
): Promise<ReviewAndRating | null> => {
  const result = await prisma.reviewAndRating.findUnique({
    where: {
      id,
    },
  });
  return result;
};
const updateReviewRating = async (
  id: string,
  payload: Partial<ReviewAndRating>
): Promise<ReviewAndRating> => {
  const result = await prisma.reviewAndRating.update({
    where: {
      id,
    },
    data: payload,
  });
  return result;
};
const deleteReviewRating = async (
  id: string
): Promise<ReviewAndRating | null> => {
  const result = await prisma.reviewAndRating.delete({
    where: {
      id,
    },
  });
  return result;
};
export const reviewRatingService = {
  insertIntoDb,
  getAllReviewRating,
  getSingleReviewRating,
  updateReviewRating,
  deleteReviewRating,
};
