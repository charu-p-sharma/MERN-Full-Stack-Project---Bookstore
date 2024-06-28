import React, { useState, useEffect } from "react";
import AddBook from "./components/AddBook";
import BookList from "./components/BookList";
import FilterBooks from "./components/FilterBooks";

const App = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState();

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get("http://localhost:5000/books");
      setBooks(response.data);
      setFilteredBooks(response.data);
    } catch (error) {
      console.log("Error fetching books:", error);
    }
  };

  const addBooks = async (book) => {
    try {
      const response = await axios.post("http://localhost:5000/books", book);
      setBooks([...books, response.data]);
      setFilteredBooks([...filteredBooks, response.data]);
    } catch (error) {
      console.log("Error adding the books:", error);
    }
  };

  const filterBooks = async (title) => {
    if (title === "") {
      setFilteredBooks(books);
    } else {
      setFilteredBooks(
        books.filter((book) =>
          book.title.toLowerCase().includes(title.toLowerCase())
        )
      );
    }
  };

  // const deleteBook = async (id) => {};
  // const updateBook = async (book) => {};
  // const filterBooks = (title) => {};

  return (
    <>
      <div className="App">
        <h1>Book Manager</h1>
        <AddBook addBooks={addBooks} />
        <FilterBooks filterBooks={filterBooks} />
        <BookList filteredBooks={filteredBooks} />
      </div>
    </>
  );
};

export default App;
