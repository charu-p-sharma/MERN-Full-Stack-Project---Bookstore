import express from 'express';
import Book from '../models/book.model.js';

const router = express.Router();

//Get all books
router.get("/", async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

//Add a new book
router.post("/", async (req, res) => {
    const book = new Book({
        title: req.body.title,
        author: req.body.author,
        year: req.body.year
    })
    try {
        const newBook = await book.save();
        res.status(200).json(newBook);
    } catch (error) {
        req.status(400).json({ message: error.message });
    }
});

//To search for books
router.get("/search", async (req, res) => {
    const { title } = req.query
    try {
        const books = await Book.find({ title: newReg(title, "i") })
        res.json(books);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

export default router;