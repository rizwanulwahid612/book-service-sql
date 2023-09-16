import { Request, Response } from 'express';

import { userService } from './users.service';

const insertIntiDB = async (req: Request, res: Response) => {
  try {
    const result = await userService.insertIntoDb(req.body);
    res.send({
      success: true,
      statusCode: 200,
      message: 'User created successfully!',
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

// Import JwtPayload

// ...

// ...

const findAllUsers = async (req: Request, res: Response) => {
  try {
    const {
      size = 10,
      page = 1,
      sortBy = 'createdAt',
      sortOrder = 'asc',
      searchTerm = '',
      ...filterData
    } = req.query;
    const result = await userService.getAlluser(
      String(searchTerm),
      String(sortBy),
      sortOrder as 'asc' | 'desc',
      Number(size),
      Number(page),
      filterData
    );
    res.send({
      success: true,
      statusCode: 200,
      message: 'User fetched successfully!',
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
const getSingleUsers = async (req: Request, res: Response) => {
  try {
    const result = await userService.getSingleuser(req.params.id);
    res.send({
      success: true,
      statusCode: 200,
      message: 'Single User fetched successfully!',
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
const updateUsers = async (req: Request, res: Response) => {
  const result = await userService.updateUser(req.params.id, req.body);
  res.send({
    success: true,
    statusCode: 200,
    message: 'User updated successfully!',
    data: result,
  });
};
const deleteUsers = async (req: Request, res: Response) => {
  const result = await userService.deleteUser(req.params.id);
  res.send({
    success: true,
    statusCode: 200,
    message: 'User deleted successfully!',
    data: result,
  });
};
export const userController = {
  insertIntiDB,
  findAllUsers,
  getSingleUsers,
  updateUsers,
  deleteUsers,
};
