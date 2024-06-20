import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "@redux/constants/uiSlice.constant";

const uiSlice = createSlice({
  name: "uiSlice",
  initialState,
  reducers: {
    openModal(state) {
      state.open = true;
    },
    closeModal(state) {
      state.open = false;
    },
  },
});

export const { openModal, closeModal } = uiSlice.actions;

export default uiSlice.reducer;
