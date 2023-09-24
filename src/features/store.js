
import { configureStore } from '@reduxjs/toolkit';
import postsReducer from "../features/postSlice";
import adminReducer from './admin';

const store = configureStore({
  reducer: {
    admin: adminReducer,
    posts: postsReducer,
  },
});

export default store;
