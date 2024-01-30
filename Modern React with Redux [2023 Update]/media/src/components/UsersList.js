import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import useThunk from "../hooks/useThunk";
import { fetchUsers, addUser } from "../store";
import Button from "./Button";
import Skeleton from "./Skeleton";
import UserListItem from "./UserListItem";

const UsersList = () => {
  const [doFetchUsers, isLoadingUsers, loadingUsersError] =
    useThunk(fetchUsers);
  const [doCreateUser, isCreatingUser, creatingUserError] = useThunk(addUser);

  const { data } = useSelector((state) => state.users);

  const handleUserAdd = () => {
    doCreateUser(addUser);
  };

  let content;

  if (isLoadingUsers) {
    content = <Skeleton times={6} className="h-10 w-full" />;
  } else if (loadingUsersError) {
    content = <p>Error</p>;
  } else {
    content = data.map((user) => <UserListItem key={user.id} user={user} />);
  }

  useEffect(() => {
    doFetchUsers(fetchUsers);
  }, [doFetchUsers]);

  return (
    <div>
      <div className="flex flex-row justify-between m-3 items-center">
        <h1 className="m-2 text-xl">Users</h1>
        <Button loading={isCreatingUser} onClick={handleUserAdd}>
          + Add User
        </Button>
        {creatingUserError && "Error"}
      </div>
      {content}
    </div>
  );
};

export default UsersList;
