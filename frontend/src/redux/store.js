import userSlice from "./feature/userSlice"
import { configureStore } from '@reduxjs/toolkit';

export default configureStore({
    reducer: {
      user: userSlice,
    },
  });
  