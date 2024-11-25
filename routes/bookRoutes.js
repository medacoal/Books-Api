// routes/bookRoutes.js
import express from 'express';

import {
  getAllBooks,
  getBookById,
  createBook,
  updateBookById,
  deleteBookById,
} from '../controller/bookController.js';

const router = express.Router();

router.get('/books', getAllBooks);
router.get('/books/:id', getBookById);
router.post('/books', createBook);
router.put('/books/:id', updateBookById);
router.delete('/books/:id', deleteBookById);


console.log('Routes loaded');  

export default router;
