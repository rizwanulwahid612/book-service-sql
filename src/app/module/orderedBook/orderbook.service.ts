import { OrderedBook, PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const insertIntoDb = async (data: OrderedBook): Promise<OrderedBook> => {
  const result = await prisma.orderedBook.create({
    data,
  });
  return result;
};

const getAllOrderedBook = async () => {
  const result = await prisma.orderedBook.findMany();
  return result;
};

const getSingleOrderedBook = async (
  id: string
): Promise<OrderedBook | null> => {
  const result = await prisma.orderedBook.findUnique({
    where: {
      id,
    },
  });
  return result;
};
const updateOrderedBook = async (
  id: string,
  payload: Partial<OrderedBook>
): Promise<OrderedBook> => {
  const result = await prisma.orderedBook.update({
    where: {
      id,
    },
    data: payload,
  });
  return result;
};
const deleteOrderedbook = async (id: string): Promise<OrderedBook | null> => {
  const result = await prisma.orderedBook.delete({
    where: {
      id,
    },
  });
  return result;
};
export const orderedbookService = {
  insertIntoDb,
  getAllOrderedBook,
  getSingleOrderedBook,
  updateOrderedBook,
  deleteOrderedbook,
};
