import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import bookRoutes from './routes/book.route.js';

const app = express();
const port = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb+srv://charu:charu@cluster0.4mv3pzl.mongodb.net/')
    .then(() => console.log('Connected to MongoDB'))
    .catch(error => console.error('Error connecting to MongoDB:', error));

app.use("/books", bookRoutes);

//Route
app.listen(port, () => {
    console.log(`Server is running on port number ${port}`);
});



