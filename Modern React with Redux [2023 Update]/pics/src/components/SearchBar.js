import { useState } from "react";

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
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={image} onChange={handleValue} />
      </form>
    </div>
  );
}

export default SearchBar;
