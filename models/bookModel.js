// models/bookModel.js
import mongoose from 'mongoose';


const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    enum: ['Comedy', 'Romance', 'Tragedy', 'Horror'],
    required: true,
  },
});

const Book = mongoose.model('Book', BookSchema);
export default Book;
