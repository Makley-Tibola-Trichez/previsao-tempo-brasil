import { createSlice } from "@reduxjs/toolkit";
import type AppType from "./appSlice.types";
const initialState: AppType = {
  isLoading: false,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    isLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export default appSlice;
