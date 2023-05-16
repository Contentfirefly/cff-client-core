import { createSlice } from "@reduxjs/toolkit";

export const contentSlice = createSlice({
  name: "content",
  initialState: null,
  reducers: {
    setContent: (_, action) => action.payload,
  },
});

export const { setContent } = contentSlice.actions;
