import { Request, Response } from 'express';
import { orderedbookService } from './orderbook.service';

const insertIntiDB = async (req: Request, res: Response) => {
  try {
    const result = await orderedbookService.insertIntoDb(req.body);
    res.send({
      success: true,
      statusCode: 200,
      message: 'Orderedbook created successfully!',
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
const findAllOrderedbook = async (req: Request, res: Response) => {
  try {
    const result = await orderedbookService.getAllOrderedBook();
    res.send({
      success: true,
      statusCode: 200,
      message: 'Orderbook fetched successfully!',
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
const getSingleOrderbook = async (req: Request, res: Response) => {
  try {
    const result = await orderedbookService.getSingleOrderedBook(req.params.id);
    res.send({
      success: true,
      statusCode: 200,
      message: 'Single Orderbook fetched successfully!',
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
const updateOrderbook = async (req: Request, res: Response) => {
  const result = await orderedbookService.updateOrderedBook(
    req.params.id,
    req.body
  );
  res.send({
    success: true,
    statusCode: 200,
    message: 'Orderbook updated successfully!',
    data: result,
  });
};
const deleteOrderbook = async (req: Request, res: Response) => {
  const result = await orderedbookService.deleteOrderedbook(req.params.id);
  res.send({
    success: true,
    statusCode: 200,
    message: 'Orderbook deleted successfully!',
    data: result,
  });
};
export const orderbookController = {
  insertIntiDB,
  findAllOrderedbook,
  getSingleOrderbook,
  updateOrderbook,
  deleteOrderbook,
};
