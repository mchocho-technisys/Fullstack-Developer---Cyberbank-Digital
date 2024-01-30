import axios from "axios";
import { URL } from "../config";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const deleteUser = createAsyncThunk("delete/user", async (user) => {
  await axios.delete(`${URL}/users/${user.id}`);

  return user;
});
