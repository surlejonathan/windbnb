import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    open: false,
  },
  reducers: {
    SET_MODAL: (state, action) => {
      state.open = action.payload;
    },
  },
});

export const { SET_MODAL } = modalSlice.actions;

export default modalSlice.reducer;
