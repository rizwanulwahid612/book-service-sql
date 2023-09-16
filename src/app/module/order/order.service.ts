import { Order, PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const insertIntoDb = async (data: Order): Promise<Order> => {
  const result = await prisma.order.create({
    data,
    include: {
      users: true,
      orderedBooks: true,
    },
  });
  return result;
};

const getAllOrder = async () => {
  const result = await prisma.order.findMany({
    include: {
      users: true,
      orderedBooks: true,
    },
  });
  return result;
};

const getSingleOrder = async (id: string): Promise<Order | null> => {
  const result = await prisma.order.findUnique({
    where: {
      id,
    },
    include: {
      orderedBooks: {
        select: {
          bookId: true,
          quantity: true,
        },
      },
    },
  });
  return result;
};
const updateOrder = async (
  id: string,
  payload: Partial<Order>
): Promise<Order> => {
  const result = await prisma.order.update({
    where: {
      id,
    },
    data: payload,
  });
  return result;
};
const deleteOrder = async (id: string): Promise<Order | null> => {
  const result = await prisma.order.delete({
    where: {
      id,
    },
  });
  return result;
};
export const orderService = {
  insertIntoDb,
  getAllOrder,
  getSingleOrder,
  updateOrder,
  deleteOrder,
};
