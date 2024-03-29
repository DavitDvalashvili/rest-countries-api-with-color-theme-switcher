import { configureStore } from "@reduxjs/toolkit";

import countryReducer from "../Feature/countrySlice";
import themeReducer from "../Feature/themeSlice";

const store = configureStore({
  reducer: {
    countries: countryReducer, // Reducer for managing country-related state
    theme: themeReducer, // Reducer for managing theme-related state
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
