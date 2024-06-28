import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    year: Number,
}, { timestamps: true });

const Book = mongoose.model("Book", bookSchema);

export default Book;