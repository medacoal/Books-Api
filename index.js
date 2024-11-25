
import express from 'express';
import { connectDb } from './config/dbconfig.js'; // Ensure the file has the correct `.js` extension
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import bookRoutes from './routes/bookRoutes.js'; // Ensure the file has the correct `.js` extension

const app = express();
dotenv.config();

const port = process.env.PORT || 3000;
const dbUrl = process.env.MONGODB_URL;

app.get('/', (req, res) => {
  res.send(`
    <h1>Welcome to the Book API</h1>
    <p>Use the following endpoints to interact with the API:</p>
    <ul>
      <li>GET /api/books - Fetch all books</li>
      <li>GET /api/books/:id - Fetch a single book by ID</li>
      <li>POST /api/books - Add a new book</li>
      <li>PUT /api/books/:id - Update a book by ID</li>
      <li>DELETE /api/books/:id - Delete a book by ID</li>
    </ul>
  `);
});

// Middleware and routes
app.use(express.json());
app.use('/api', bookRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log('MongoDB connected'))
    .catch((error) => console.error(`Error connecting to DB: ${error.message}`));


// Database connection
connectDb(dbUrl);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
