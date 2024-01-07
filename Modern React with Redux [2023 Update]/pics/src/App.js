import { useState } from "react";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import { searchImages } from "./api/ImagesApi";

function App() {
  const [images, setImages] = useState([]);

  const handleSubmit = async (image) => {
    const images = await searchImages(image);
    setImages(images);
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </>
  );
}

export default App;
