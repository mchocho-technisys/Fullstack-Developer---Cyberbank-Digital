import React, { useState } from "react";
import useBooksContext from "../hooks/useBooksContext";

const BookEdit = ({ id, onEdit, title }) => {
  const { editBookById } = useBooksContext();
  const [titleValue, setTitleValue] = useState(title);

  const handleSubmit = (e) => {
    e.preventDefault();
    editBookById(titleValue, id);
    onEdit();
  };

  const handleChange = (e) => {
    setTitleValue(e.target.value);
  };

  return (
    <form className="book-edit" onSubmit={handleSubmit}>
      <label>Title</label>
      <input
        className="input"
        onChange={handleChange}
        type="text"
        value={titleValue}
      />
      <button className="button is-primary">Save</button>
    </form>
  );
};

export default BookEdit;
