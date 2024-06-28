import express from 'express';
import route from express.route;
import Book from '../models/book.model.js';

const router = route();

router.get("/", async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})