import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { URL } from "../config";
import { faker } from "@faker-js/faker";

const albumsApi = createApi({
  reducerPath: "albums",
  baseQuery: fetchBaseQuery({
    baseUrl: URL,
  }),
  endpoints(builder) {
    return {
      fetchAlbums: builder.query({
        query: (user) => {
          return {
            url: "/albums",
            params: {
              userId: user.id,
            },
            method: "GET",
          };
        },
      }),
      addAlbum: builder.mutation({
        query: (user) => {
          return {
            url: "/albums",
            method: "POST",
            body: {
              title: faker.commerce.productName(),
              userId: user.id,
            },
          };
        },
      }),
      // removeAlbum: builder.mutation({
      //   mutation: (album) => {
      //     return {
      //       url: `albums/${album.id}`,
      //       method: "DELETE",
      //     };
      //   },
      // }),
    };
  },
});

export const { useFetchAlbumsQuery, useAddAlbumMutation } = albumsApi;
export { albumsApi };
