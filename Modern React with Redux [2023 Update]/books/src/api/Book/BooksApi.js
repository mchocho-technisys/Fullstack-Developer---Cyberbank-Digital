import axios from "axios";
import { URL } from "./config";
import { getImage } from "../Image/ImagesApi";

export const getBooks = async () => {
  const response = await axios.get(URL);

  return response.data;
};

export const createBook = async (title, image) => {
  const response = await axios.post(URL, {
    title,
    image,
  });

  return response.data;
};

export const editBook = async (id, title) => {
  const image = await getImage(title);

  const response = await axios.put(`${URL}/${id}`, {
    id,
    title,
    image,
  });

  return response.data;
};

export const deleteBook = async (id) => {
  const response = await axios.delete(`${URL}/${id}`);

  return response.data;
};
