import { PrismaClient, User } from '@prisma/client';

const prisma = new PrismaClient();

const insertIntoDb = async (data: User): Promise<User> => {
  const result = await prisma.user.create({
    data,
  });
  return result;
};

const getAlluser = async (
  searchTerm: string,
  sortBy: string,
  sortOrder: 'asc' | 'desc',
  size: number,
  page: number,
  filterData: any
): Promise<User[] | any> => {
  const result = await prisma.user.findMany({
    include: {},
    where: {
      OR: [
        {
          name: {
            contains: searchTerm,
            mode: 'insensitive',
          },
        },
        {
          email: {
            contains: searchTerm,
            mode: 'insensitive',
          },
        },
      ],
      contactNo: {
        equals: filterData.contactNo as string,
        mode: 'insensitive',
      },
    },
    take: size,
    skip: (page - 1) * size,
    orderBy: {
      [sortBy]: sortOrder,
    },
  });
  const total = await prisma.user.count();
  return {
    meta: {
      page,
      size,
      total,
      totalPage: Math.ceil(total / size),
    },
    data: result,
  };
};

const getSingleuser = async (id: string): Promise<User | null> => {
  const result = await prisma.user.findUnique({
    where: {
      id,
    },
  });
  return result;
};
const updateUser = async (
  id: string,
  payload: Partial<User>
): Promise<User> => {
  const result = await prisma.user.update({
    where: {
      id,
    },
    data: payload,
  });
  return result;
};
const deleteUser = async (id: string): Promise<User | null> => {
  const result = await prisma.user.delete({
    where: {
      id,
    },
  });
  return result;
};

export const userService = {
  insertIntoDb,
  getAlluser,
  updateUser,
  getSingleuser,
  deleteUser,
};
