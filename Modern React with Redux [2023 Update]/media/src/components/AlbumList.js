import React from "react";
import { useFetchAlbumsQuery, useAddAlbumMutation } from "../store";
import Skeleton from "./Skeleton";
import AlbumListItem from "./AlbumListItem";
import Button from "./Button";

function AlbumList({ user }) {
  const { data, error, isLoading } = useFetchAlbumsQuery(user);
  const [addAlbum, results] = useAddAlbumMutation();

  let content;

  if (error) {
    content = "Error..";
  } else if (isLoading) {
    content = <Skeleton times={3} className="h-10 w-full" />;
  } else {
    content = data.map((album) => (
      <AlbumListItem key={album.id} album={album} />
    ));
  }

  const handleAddAlbum = () => {
    addAlbum(user);
  };

  return (
    <div>
      <div>
        <p>Albums By {user.name}</p>
        <Button onClick={handleAddAlbum}>+ Add Album</Button>
      </div>
      {content}
    </div>
  );
}

export default AlbumList;
