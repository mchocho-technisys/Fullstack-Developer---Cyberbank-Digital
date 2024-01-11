import React, { useState } from "react";

const BookEdit = ({ id, onEdit, title }) => {
  const [titleValue, setTitleValue] = useState(title);

  const handleSubmit = (e) => {
    e.preventDefault();
    onEdit(titleValue, id);
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
