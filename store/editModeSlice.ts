import { createSlice } from "@reduxjs/toolkit";

export const editModeSlice = createSlice({
  name: "editMode",
  initialState: false,
  reducers: {
    setEditMode: (_, action) => action.payload,
  },
});

export const { setEditMode } = editModeSlice.actions;
