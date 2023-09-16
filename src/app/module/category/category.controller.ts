import { Request, Response } from 'express';
import { categoryService } from './category.service';

const insertIntiDB = async (req: Request, res: Response) => {
  try {
    const result = await categoryService.insertIntoDb(req.body);
    res.send({
      success: true,
      statusCode: 200,
      message: 'Category created successfully!',
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
const findAllCategory = async (req: Request, res: Response) => {
  try {
    const result = await categoryService.getAllCategory();
    res.send({
      success: true,
      statusCode: 200,
      message: 'Category fetched successfully!',
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
const getSingleCategory = async (req: Request, res: Response) => {
  try {
    const result = await categoryService.getSingleCategory(req.params.id);
    res.send({
      success: true,
      statusCode: 200,
      message: 'Single Category fetched successfully!',
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
const updateCategory = async (req: Request, res: Response) => {
  const result = await categoryService.updateCategory(req.params.id, req.body);
  res.send({
    success: true,
    statusCode: 200,
    message: 'Category updated successfully!',
    data: result,
  });
};
const deleteCategory = async (req: Request, res: Response) => {
  const result = await categoryService.deleteCategory(req.params.id);
  res.send({
    success: true,
    statusCode: 200,
    message: 'Category deleted successfully!',
    data: result,
  });
};
export const categoryController = {
  insertIntiDB,
  findAllCategory,
  getSingleCategory,
  updateCategory,
  deleteCategory,
};
