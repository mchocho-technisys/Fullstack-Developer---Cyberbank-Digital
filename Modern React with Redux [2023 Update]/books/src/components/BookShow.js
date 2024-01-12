import React, { useState } from "react";
import useBooksContext from "../hooks/useBooksContext";
import BookEdit from "./BookEdit";

const BookShow = ({ book }) => {
  const { deleteBookById } = useBooksContext();
  const [edit, setEdit] = useState(false);

  const handleEdit = () => {
    setEdit(false);
  };

  return (
    <div className="book-show">
      <img alt={book.title} src={book.image} />
      {edit ? (
        <BookEdit id={book.id} onEdit={handleEdit} title={book.title} />
      ) : (
        book.title
      )}
      <div className="actions">
        <button className="edit" onClick={() => setEdit(!edit)}>
          Edit
        </button>
        <button className="delete" onClick={() => deleteBookById(book.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookShow;
