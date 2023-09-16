import { Request, Response } from 'express';
import { bookService } from './book.service';

const insertIntoDB = async (req: Request, res: Response) => {
  try {
    const result = await bookService.insertIntoDb(req.body);
    res.send({
      success: true,
      statusCode: 200,
      message: 'Book created successfully!',
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

const findAllBooks = async (req: Request, res: Response) => {
  try {
    const {
      page = 1,
      size = 10,
      sortBy = 'price',
      sortOrder = 'asc',
      searchTerm = '',
      minPrice,
      maxPrice,
      ...filterData
    } = req.query;
    const filterConditions: any = {};
    if (minPrice !== undefined && !isNaN(Number(minPrice))) {
      filterConditions.price = {
        gte: Number(minPrice),
      };
    }
    if (maxPrice !== undefined && !isNaN(Number(maxPrice))) {
      filterConditions.price = {
        ...filterConditions.price,
        lte: Number(maxPrice),
      };
    }
    const result = await bookService.getAllBook(
      String(searchTerm),
      String(sortBy),
      sortOrder as 'asc' | 'desc',
      Number(page),
      Number(size),
      filterData,
      filterConditions
    );
    res.send({
      success: true,
      statusCode: 200,
      message: 'Books fetched successfully!',
      meta: result.meta,
      data: result.data,
    });
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: 'Something Went Wrong',
      error,
    });
  }
};

const getBooksByCategoryId = async (req: Request, res: Response) => {
  try {
    const { categoryId } = req.params;
    const page = parseInt(req.query.page as string) || 1;
    const size = parseInt(req.query.size as string) || 10;

    const result = await bookService.getBooksByCategoryId(
      categoryId,
      page,
      size
    );

    res.send({
      success: true,
      statusCode: 200,
      message: 'Books with associated category data fetched successfully',
      meta: {
        page,
        size,
        total: result.totalCount,
        totalPage: Math.ceil(result.totalCount / size),
      },
      data: result.books,
    });
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: 'Something Went Wrong',
      error,
    });
  }
};
const getSingleBook = async (req: Request, res: Response) => {
  const result = await bookService.getSingleBook(req.params.id);
  res.send({
    success: true,
    statusCode: 200,
    message: 'Single Book fetched successfully!',
    data: result,
  });
};

const updateBook = async (req: Request, res: Response) => {
  const result = await bookService.updateBook(req.params.id, req.body);
  res.send({
    success: true,
    statusCode: 200,
    message: 'Book updated successfully!',
    data: result,
  });
};
const deleteBook = async (req: Request, res: Response) => {
  const result = await bookService.deleteBook(req.params.id);
  res.send({
    success: true,
    statusCode: 200,
    message: 'Book deleted successfully!',
    data: result,
  });
};
export const bookController = {
  insertIntoDB,
  findAllBooks,
  getSingleBook,
  updateBook,
  deleteBook,
  getBooksByCategoryId,
};
