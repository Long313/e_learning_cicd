"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  language: "vie",
};

export const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    chooseLanguage: (state, action) => {
      console.log("action payload", action.payload);
      state.language = action.payload;
    },
  },
});

export const { chooseLanguage } = languageSlice.actions;
export default languageSlice.reducer;
