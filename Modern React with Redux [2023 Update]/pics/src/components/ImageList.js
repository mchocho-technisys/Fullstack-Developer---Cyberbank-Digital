import React from "react";
import ImageShow from "./ImageShow";
import "./ImageList.css";

function ImageList({ images }) {
  return (
    <div className="image-list">
      {images && images.length > 0 ? (
        images.map((image) => <ImageShow image={image} key={images.id} />)
      ) : (
        <>
          <p>Does not exist images</p>
        </>
      )}
    </div>
  );
}

export default ImageList;
