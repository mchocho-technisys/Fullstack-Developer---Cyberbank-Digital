import React from "react";
import ExpandablePanel from "./ExpandablePanel";

const AlbumListItem = ({ album }) => {
  const header = <>{album.title}</>;

  return <ExpandablePanel header={header}>CONTENT</ExpandablePanel>;
};

export default AlbumListItem;
