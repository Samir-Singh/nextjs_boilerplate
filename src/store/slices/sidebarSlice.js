// sidebarSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isMinimized: false,
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggle: (state) => {
      state.isMinimized = !state.isMinimized;
    },
  },
});

export const { toggle } = sidebarSlice.actions;

export default sidebarSlice.reducer;
