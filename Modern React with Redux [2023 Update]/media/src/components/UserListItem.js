import React from "react";
import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import AlbumList from "./AlbumList";
import { FaTrash } from "react-icons/fa";
import { deleteUser } from "../store";
import useThunk from "../hooks/useThunk";

const UserListItem = ({ user }) => {
  const [doDeleteUser, isDeletingUser, deletingUserError] =
    useThunk(deleteUser);

  const handleDeleteUser = () => {
    doDeleteUser(user);
  };

  const header = (
    <>
      <Button
        className="mr-3"
        loading={isDeletingUser}
        onClick={handleDeleteUser}
      >
        <FaTrash />
      </Button>
      {deletingUserError && <div>{deletingUserError}</div>}
      {user.name}
    </>
  );

  return (
    <ExpandablePanel header={header}>
      <AlbumList user={user} />
    </ExpandablePanel>
  );
};

export default UserListItem;
