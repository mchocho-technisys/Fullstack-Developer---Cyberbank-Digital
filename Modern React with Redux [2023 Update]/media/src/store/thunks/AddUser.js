import { createAsyncThunk } from "@reduxjs/toolkit";
import { URL } from "../config";
import axios from "axios";
import { faker } from "@faker-js/faker";

export const addUser = createAsyncThunk("users/add", async () => {
  const response = await axios.post(`${URL}/users`, {
    name: faker.name.fullName(),
  });
  return response.data;
});
