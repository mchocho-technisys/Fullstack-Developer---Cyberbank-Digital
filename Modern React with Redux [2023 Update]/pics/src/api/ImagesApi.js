import axios from "axios";
import { URL, accessKey } from "./config";

export const searchImages = async (query) => {
  const response = await axios.get(`${URL}/search/photos`, {
    headers: {
      Authorization: `Client-ID ${accessKey}`,
    },
    params: {
      query,
    },
  });

  return response.data.results;
};
