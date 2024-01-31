import React from "react";
import ExpandablePanel from "./ExpandablePanel";
import Button from "./Button";
import { FaTrash } from "react-icons/fa";
import { useRemoveAlbumMutation } from "../store";

const AlbumListItem = ({ album }) => {
  const [removeAlbum, results] = useRemoveAlbumMutation();

  const handleDeleteAlbum = () => {
    removeAlbum(album);
  };

  const header = (
    <>
      <Button
        className="mr-3"
        onClick={handleDeleteAlbum}
        loading={results.isLoading}
      >
        <FaTrash />
      </Button>
      {album.title}
    </>
  );

  return <ExpandablePanel header={header}>!!!!!</ExpandablePanel>;
};

export default AlbumListItem;
