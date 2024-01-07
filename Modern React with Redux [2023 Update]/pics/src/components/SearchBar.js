import { useState } from "react";
import "./SearchBar.css";

function SearchBar({ onSubmit }) {
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(image);
  };

  const handleValue = (e) => {
    setImage(e.target.value);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <label>Enter Search Term</label>
        <input type="text" value={image} onChange={handleValue} />
      </form>
    </div>
  );
}

export default SearchBar;
