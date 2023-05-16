import { createSlice } from "@reduxjs/toolkit";

export const initSlice = createSlice({
  name: "init",
  initialState: true,
  reducers: {
    onInit: (_) => false,
  },
});

export const { onInit } = initSlice.actions;
