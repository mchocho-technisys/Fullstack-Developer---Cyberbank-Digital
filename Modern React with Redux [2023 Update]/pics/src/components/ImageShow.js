function ImageShow({ image }) {
  return (
    <>
      <img alt={image.alt_description} src={image.urls.small} />
    </>
  );
}

export default ImageShow;
