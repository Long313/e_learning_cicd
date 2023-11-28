import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import languageSlice from "./features/languageSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    language: languageSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
