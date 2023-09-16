import { Book, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const insertIntoDb = async (data: Book): Promise<Book> => {
  const result = await prisma.book.create({
    data,
    include: {
      category: true,
    },
  });
  return result;
};

const getAllBook = async (
  searchTerm: string,
  sortBy: string,
  sortOrder: 'asc' | 'desc',
  page: number,
  size: number,
  filterData: any,
  filterConditions: any
): Promise<Book[] | any> => {
  const result = await prisma.book.findMany({
    include: {
      category: true,
    },
    where: {
      ...filterConditions,
      OR: [
        {
          title: {
            contains: searchTerm,
            mode: 'insensitive',
          },
        },
        {
          author: {
            contains: searchTerm,
            mode: 'insensitive',
          },
        },
        {
          genre: {
            contains: searchTerm,
            mode: 'insensitive',
          },
        },
      ],
      category: {
        id: {
          equals: filterData.category as string,
          mode: 'insensitive',
        },
      },
    },
    take: size,
    skip: (page - 1) * size,
    orderBy: {
      [sortBy]: sortOrder,
    },
  });
  const total = await prisma.book.count();
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

const getBooksByCategoryId = async (
  categoryId: string,
  page: number,
  size: number
) => {
  const skip = (page - 1) * size;

  const [books, totalCount] = await Promise.all([
    prisma.book.findMany({
      where: {
        categoryId,
      },
      include: {
        category: true,
      },
      skip,
      take: size,
    }),
    prisma.book.count({
      where: {
        categoryId,
      },
    }),
  ]);

  return { books, totalCount };
};
const getSingleBook = async (id: string): Promise<Book | null> => {
  const result = await prisma.book.findUnique({
    where: {
      id,
    },
  });
  return result;
};

const updateBook = async (
  id: string,
  payload: Partial<Book>
): Promise<Book> => {
  const result = await prisma.book.update({
    where: {
      id,
    },
    data: payload,
  });
  return result;
};
const deleteBook = async (id: string): Promise<Book | null> => {
  const result = await prisma.book.delete({
    where: {
      id,
    },
  });
  return result;
};
export const bookService = {
  insertIntoDb,
  getAllBook,
  getSingleBook,
  updateBook,
  deleteBook,
  getBooksByCategoryId,
};
