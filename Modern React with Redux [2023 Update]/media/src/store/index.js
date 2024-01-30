import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./slices/UsersSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { albumsApi } from "./apis/AlbumsApi";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    albums: albumsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(albumsApi.middleware);
  },
});

setupListeners(store.dispatch);

export * from "./thunks/FetchUsers";
export * from "./thunks/AddUser";
export * from "./thunks/DeleteUser";
export { useFetchAlbumsQuery, useAddAlbumMutation } from "./apis/AlbumsApi";
