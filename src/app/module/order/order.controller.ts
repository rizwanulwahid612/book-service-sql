import { Request, Response } from 'express';
import { orderService } from './order.service';

const insertIntiDB = async (req: Request, res: Response) => {
  try {
    const result = await orderService.insertIntoDb(req.body);
    res.send({
      success: true,
      statusCode: 200,
      message: 'Order created successfully!',
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
const findAllOrder = async (req: Request, res: Response) => {
  try {
    const result = await orderService.getAllOrder();
    res.send({
      success: true,
      statusCode: 200,
      message: 'Order fetched successfully!',
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
const getSingleOrder = async (req: Request, res: Response) => {
  try {
    const result = await orderService.getSingleOrder(req.params.id);
    res.send({
      success: true,
      statusCode: 200,
      message: 'Single Order fetched successfully!',
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
const updateOrder = async (req: Request, res: Response) => {
  const result = await orderService.updateOrder(req.params.id, req.body);
  res.send({
    success: true,
    statusCode: 200,
    message: 'Order updated successfully!',
    data: result,
  });
};
const deleteOrder = async (req: Request, res: Response) => {
  const result = await orderService.deleteOrder(req.params.id);
  res.send({
    success: true,
    statusCode: 200,
    message: 'Order deleted successfully!',
    data: result,
  });
};
export const orderController = {
  insertIntiDB,
  findAllOrder,
  getSingleOrder,
  updateOrder,
  deleteOrder,
};
