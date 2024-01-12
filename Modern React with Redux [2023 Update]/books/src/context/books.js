import { createContext, useCallback, useState } from "react";
import {
  getBooks as getBooksAPI,
  createBook as createBookAPI,
  deleteBook as deleteBookAPI,
  editBook as editBookAPI,
} from "../api/Book/BooksApi";
import { getImage } from "../api/Image/ImagesApi";

const BooksContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await getBooksAPI();

    setBooks(response);
  };

  const stableFetchBooks = useCallback(fetchBooks, []);

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

  const valueToShare = {
    books,
    stableFetchBooks,
    createBook,
    deleteBookById,
    editBookById,
  };

  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
}

export { Provider };
export default BooksContext;
