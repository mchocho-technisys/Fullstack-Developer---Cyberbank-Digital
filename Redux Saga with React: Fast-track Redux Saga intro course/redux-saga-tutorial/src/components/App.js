import { connect } from "react-redux";
import { getUsersRequest, createUserRequest, deleteUserRequest } from "../actions/users";
import UsersList from "./UsersList";
import NewUserForm from "./NewUserForm";

function App() {
  const handleSubmit = (firstName, lastName) => {
    createUserRequest(firstName, lastName);
  };

  const handleDeleteUser = (userId) => {
    deleteUserRequest(userId);
  }

  return (
    <div>
      <NewUserForm onSubmit={handleSubmit} />
      <UsersList users={users.items} onDeleteUser={handleDeleteUser} />
    </div>
  );
}

export default connect(({users}) => ({users}), {
  getUsersRequest,
  createUserRequest,
  deleteUserRequest
})(App);
