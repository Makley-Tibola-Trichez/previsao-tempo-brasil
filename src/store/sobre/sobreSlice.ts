import { createSlice } from "@reduxjs/toolkit";
import type SobreType from "./sobreSlice.types";

const initialState = {
  sobre: {} as SobreType,
};

const sobreSlice = createSlice({
  name: "sobre",
  initialState,
  reducers: {
    setSobre: (state, action) => {
      state.sobre = action.payload;
    },
  },
});

export default sobreSlice;
