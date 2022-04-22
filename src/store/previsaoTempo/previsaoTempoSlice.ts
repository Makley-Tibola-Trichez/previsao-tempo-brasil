import { createSlice } from "@reduxjs/toolkit";
import type { PrevisaoTempoType } from "./previsaTempoSlice.types";

const initialState: PrevisaoTempoType = {} as PrevisaoTempoType;

const previsaoTempoSlice = createSlice({
  name: "previsaoTempo",
  initialState,
  reducers: {
    setPrevisaoTempo: (state, action) => {
      state = action.payload;
    },
  },
});

export default previsaoTempoSlice;
