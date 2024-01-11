import axios from "axios";
import { URL_IMAGE, URL_RANDOM, key } from "./config";

export const getImage = async (image) => {
  const response = await axios.get(`${URL_IMAGE}/search/photos`, {
    headers: {
      Authorization: `Client-ID ${key}`,
    },
    params: {
      query: image,
      per_page: 1,
    },
  });
  if (response.data.results.length > 0) {
    return response.data.results[0].urls.thumb;
  }
  return `${URL_RANDOM}${image}/300/200`;
};
