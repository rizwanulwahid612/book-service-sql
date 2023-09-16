import express from 'express';
import { orderbookController } from './orderbook.controller';

const router = express.Router();
router.post('/', orderbookController.insertIntiDB);
router.get('/', orderbookController.findAllOrderedbook);
router.get('/:id', orderbookController.getSingleOrderbook);
router.patch('/:id', orderbookController.updateOrderbook);
router.delete('/:id', orderbookController.deleteOrderbook);
export const orderbookRouter = router;
