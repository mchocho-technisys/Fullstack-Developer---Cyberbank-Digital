import { useState, useEffect } from "react";
import BookList from "./components/BookList";
import BookCreate from "./components/BookCreate";
import { getImage } from "./api/Image/ImagesApi";
import {
  getBooks as getBooksAPI,
  createBook as createBookAPI,
  deleteBook as deleteBookAPI,
  editBook as editBookAPI,
} from "./api/Book/BooksApi";

function App() {
  const [books, setBooks] = useState([]);

  const createBook = async (title) => {
    if (title) {
      const image = await getImage(title);
      const book = await createBookAPI(title, image);

      setBooks([...books, book]);
    }
  };

  const deleteBookById = async (id) => {
    const book = await deleteBookAPI(id);
    setBooks(books.filter((b) => b.id !== book.id));
  };

  const bookAlreadyInList = (id, title) => {
    return books.find((b) => b.id === id && b.title === title);
  };

  const editBookById = async (title, id) => {
    const bookAlreadyExists = bookAlreadyInList(id, title);
    if (!bookAlreadyExists) {
      const book = await editBookAPI(id, title);
      setBooks(
        books.map((b) => {
          if (b.id === book.id) {
            return book;
          }
          return b;
        })
      );
    }
  };

  const fetchBooks = async () => {
    const response = await getBooksAPI();

    setBooks(response);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
