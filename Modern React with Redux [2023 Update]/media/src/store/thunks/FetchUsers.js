import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { URL } from "../config";

export const fetchUsers = createAsyncThunk("users/fetch", async () => {
  const response = await axios.get(`${URL}/users`);

  return response.data;
});
