import React from "react";
import useBooksContext from "../hooks/useBooksContext";
import BookShow from "./BookShow";

const BookList = () => {
  const { books } = useBooksContext();

  return (
    <div className="book-list">
      {books &&
        books.length > 0 &&
        books.map((book) => <BookShow book={book} key={book.id} />)}
    </div>
  );
};

export default BookList;
