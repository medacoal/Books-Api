
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
