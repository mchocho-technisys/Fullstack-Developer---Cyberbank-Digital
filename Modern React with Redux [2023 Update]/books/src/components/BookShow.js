import React, { useState } from "react";
import BookEdit from "./BookEdit";

const BookShow = ({ book, onDelete, onEdit }) => {
  const [edit, setEdit] = useState(false);

  const handleEdit = (title, id) => {
    onEdit(title, id);
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
        <button className="delete" onClick={() => onDelete(book.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookShow;
